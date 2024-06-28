"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "isArchived",
    header: "Arquivado",
  },
  {
    accessorKey: "isFeatured",
    header: "Destaque",
  },
  {
    accessorKey: "price",
    header: "Preço",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "size",
    header: "Tamanho",
  },
  {
    accessorKey: "color",
    header: "Cor",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-x-2">
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: row.original.color }}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Data de Criação",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <CellAction data={row.original} />;
    },
  },
];
