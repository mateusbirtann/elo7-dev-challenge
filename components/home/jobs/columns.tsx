'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ReactNode } from 'react';

export type Job = {
  title: string;
  type: string;
  level: string;
  location: string | null;
  is_active: boolean;
};

export const columns: ColumnDef<Job>[] = [
  {
    accessorKey: 'title',
    header: 'Nome',
    cell: (row) => {
      return (
        <p className="py-3 text-2xl font-medium text-brand-teal md:py-6">
          {row.getValue() as ReactNode}
        </p>
      );
    },
  },
  {
    accessorKey: 'location',
    header: 'Localização',
    cell: (row) => {
      return (
        <p className="pb-6 text-2xl font-medium text-brand-dark md:py-6">
          {row.getValue() as ReactNode}
        </p>
      );
    },
  },
];
