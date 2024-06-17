import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";

interface BillboardsPageProps {
  params: {
    storeId: string;
  
  };
}

const BillboardsPage: React.FC<BillboardsPageProps> = async ({ params }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards = billboards.map((billboard) => ({
    id: billboard.id,
    label: billboard.label,
    createdAt: format(billboard.createdAt, "dd/MM/yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
