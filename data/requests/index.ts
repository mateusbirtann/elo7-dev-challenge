import { GetRequestResponse } from '@/types';

export const getRequest = async <T = Record<string, any>>(
  endpoint: string,
  options?: RequestInit,
): Promise<GetRequestResponse<T>> => {
  const initialOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  };

  const response = await fetch(`${process.env.API_URL}${endpoint}`, initialOptions);

  const data = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
};
