"use client";

import { Heading } from "../../settings/components/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export function OrderClient({ data }: OrderClientProps) {
  return (
    <>
      <Heading
        title={`Pedidos (${data.length})`}
        description="Gerencie seus pedidos"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
}
