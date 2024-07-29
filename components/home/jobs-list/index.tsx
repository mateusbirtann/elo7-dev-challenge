import { Section } from '@/components/layout/section';
import { columns } from './columns';
import { JobsDataTable } from './jobs-data-table';
import { getJobsList } from '@/data/requests/jobs-list';
import { Job } from '@/types';

export async function JobsList() {
  const response = await getJobsList();
  const jobsListData: Job[] = response.data.jobs;

  return (
    <Section className="my-10 w-full md:my-20">
      <JobsDataTable columns={columns} data={jobsListData} />
    </Section>
  );
}
