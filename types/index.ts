export interface Job {
  title: string;
  location: string | null;
}

export interface JobsListResponse {
  ok: boolean;
  status: number;
  jobs: Job[];
}

export type GetRequestResponse<T> = { ok: boolean; status: number; data: T };

export type Benefit = {
  title: string;
  description: string;
  srcImg: string;
  altImg: string;
  hasLink: boolean;
  textLink: string;
  href: string;
}