import { render, screen, waitFor } from '@testing-library/react';
import { JobsList } from '@/components/home/jobs-list';
import { getJobsList } from '@/data/requests/jobs-list';

beforeEach(() => {
  (getJobsList as jest.Mock).mockResolvedValue({
    data: {
      jobs: [
        { title: 'Pessoa desenvolvedora front-end', location: 'Remoto' },
        { title: 'Pessoa engenheira devops', location: 'São Paulo' },
      ],
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock('@/data/requests/jobs-list', () => ({
  getJobsList: jest.fn(),
}));

describe('JobsList', () => {
  it('should render JobsDataTable with jobs list data', async () => {
    render(await JobsList());

    await waitFor(() => {
      const jobTitles = screen.getAllByText(
        /Pessoa desenvolvedora front-end|Pessoa engenheira devops/,
      );
      const jobLocations = screen.getAllByText(/Remoto|São Paulo/);
      expect(jobTitles).toHaveLength(2);
      expect(jobLocations).toHaveLength(2);
      expect(getJobsList).toHaveBeenCalledTimes(1);
    });
  });
});
