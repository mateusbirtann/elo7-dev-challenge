import { render, screen, fireEvent } from '@testing-library/react';
import { ColumnDef } from '@tanstack/react-table';
import { JobsDataTable } from '@/components/home/jobs-list/jobs-data-table';

const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: 'title',
    header: 'Nome',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'location',
    header: 'Localização',
    cell: (info) => info.getValue(),
  },
];

const data = [
  { title: 'Pessoa desenvolvedora front-end', location: 'Remoto' },
  { title: 'Pessoa engenheira devops', location: 'São Paulo' },
];

describe('JobsDataTable', () => {
  test('renders without crashing', () => {
    render(<JobsDataTable columns={columns} data={data} />);
    expect(screen.getByText('Vagas em aberto')).toBeInTheDocument();
  });

  test('renders rows correctly', () => {
    render(<JobsDataTable columns={columns} data={data} />);
    expect(screen.getByText('Pessoa desenvolvedora front-end')).toBeInTheDocument();
    expect(screen.getByText('Pessoa engenheira devops')).toBeInTheDocument();
  });

  test('filters data based on input', () => {
    render(<JobsDataTable columns={columns} data={data} />);
    const input = screen.getByPlaceholderText('Nome da vaga');
    fireEvent.change(input, { target: { value: 'devops' } });
    expect(screen.getByText('Pessoa engenheira devops')).toBeInTheDocument();
    expect(screen.queryByText('Pessoa desenvolvedora front-end')).not.toBeInTheDocument();
  });

  test('shows no results message when no data matches filter', () => {
    render(<JobsDataTable columns={columns} data={data} />);
    const input = screen.getByPlaceholderText('Nome da vaga');
    fireEvent.change(input, { target: { value: 'Nonexistent' } });
    expect(screen.getByText('Sem resultados.')).toBeInTheDocument();
  });
});
