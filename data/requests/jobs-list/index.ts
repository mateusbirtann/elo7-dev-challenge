'use server';

import { JobsListResponse } from '@/types';
import { getRequest } from '..';

export async function getJobsList(options?: RequestInit) {
  const response = await getRequest<JobsListResponse>('/jobs-list', {
    ...options,
    cache: 'no-store',
  });
  return response;
}
