import { Section } from '@/components/layout/section';
import { Job, columns } from './columns';
import { JobsDataTable } from './jobs-data-table';
import jobsData from '@/__mocks__/jobs.json';

async function getData(): Promise<Job[]> {
  return jobsData.jobs;
}

export async function JobsList() {
  const data = await getData();

  return (
    <Section className="my-10 w-full md:my-20">
      <JobsDataTable columns={columns} data={data} />
    </Section>
  );
}
