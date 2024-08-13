import axios from 'axios';
import { capitalizeFirstLetter, formatLocation } from '../utils';
import { FormattedJob, Job } from 'types';

async function fetchJobsData() {
  try {
    const response = await axios.get('https://img.elo7.com.br/mock-vagas.json');
    return response.data.jobs;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`HTTP error! status: ${error.response?.status}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

function formatJob(job: Job): FormattedJob {
  return {
    title: capitalizeFirstLetter(job.title),
    location: job.location === null ? 'Remoto' : formatLocation(job.location),
  };
}

async function getFormattedJobsList(): Promise<FormattedJob[]> {
  const jobs = await fetchJobsData();
  const filteredJobs = jobs.filter((job: { is_active: any; type: string; }) => job.is_active && job.type.toLowerCase() === 'engenharia');
  return filteredJobs.map(formatJob);
}

const JobService = {
  getFormattedJobsList,
};

export default JobService;