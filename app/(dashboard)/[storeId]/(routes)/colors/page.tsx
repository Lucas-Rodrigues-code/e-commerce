import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { ColorsClient } from "./components/client";
import { ColorsColumn } from "./components/columns";

interface ColorsPageProps {
  params: {
    storeId: string;
  
  };
}

const SizesPage: React.FC<ColorsPageProps> = async ({ params }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors:ColorsColumn[] = colors.map((size) => ({
    id: size.id,
    name: size.name,
    value: size.value,
    createdAt: format(size.createdAt, "dd/MM/yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default SizesPage;
