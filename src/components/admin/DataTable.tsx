import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Column {
  key: string;
  label: string;
  formatter?: (value: any) => string;
  render?: (row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => {
                if (column.render) {
                  return <TableCell key={column.key}>{column.render(row)}</TableCell>;
                }
                
                const value = row[column.key];
                const formattedValue = column.formatter ? column.formatter(value) : value;
                
                return <TableCell key={column.key}>{formattedValue}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <div className="flex items-center justify-center py-8 text-gray-500">
          暂无数据
        </div>
      )}
    </div>
  );
};