export interface Job {
  title: string;
  type: string;
  level: string;
  location: string | null;
  is_active: boolean;
}

export interface ApiResponse {
  jobs: Job[];
}

export interface FormattedJob {
  title: string;
  location: string;
}