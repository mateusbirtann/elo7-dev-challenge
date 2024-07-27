'use client';
import { useState } from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface JobsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function JobsDataTable<TData, TValue>({ columns, data }: JobsDataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <h2 className="text-3xl font-bold text-brand-dark">Vagas em aberto</h2>
        <div className="relative max-w-sm">
          <Input
            placeholder="Nome da vaga"
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
            className="w-full border-[#C8C8CC] pr-10 placeholder:text-[#C8C8CC]"
          />
          <Search
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-brand-dark"
          />
        </div>
      </div>
      <h2 className="mb-8 mt-10 text-2xl font-bold text-brand-dark">Desenvolvimento</h2>
      <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className="flex cursor-pointer flex-col md:flex-row md:justify-between"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-0">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
