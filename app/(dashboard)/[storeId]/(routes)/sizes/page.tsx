import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { SizesClient } from "./components/client";
import { SizesColumn } from "./components/columns";

interface SizesPageProps {
  params: {
    storeId: string;
  
  };
}

const SizesPage: React.FC<SizesPageProps> = async ({ params }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes:SizesColumn[] = sizes.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "dd/MM/yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizesPage;
