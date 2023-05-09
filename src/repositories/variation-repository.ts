import prisma from "../database/database";

export async function getVariationByIdProduct(id: number) {
  return await prisma.variations.findMany({
    where: { product_id: id },
    include: { products: true },
  });
}

export const variationRepository = {
  getVariationByIdProduct,
};
