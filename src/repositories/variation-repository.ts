import { Variation } from "../protocols";
import prisma from "../database/database";

export async function getVariationByIdProduct(id: number) {
  return await prisma.variations.findMany({
    where: { product_id: id },
    include: { products: true },
  });
}

export async function createVariation(id: number, params: Variation) {
  return await prisma.variations.create({
    data: {
      code: params.code,
      name: params.name,
      price: params.price,
      promotion: params.promotion,
      photos: params.photos,
      height_cm: params.height_cm,
      width_cm: params.width_cm,
      depth_cm: params.depth_cm,
      weight_kg: params.weight_kg,
      free_shipping: params.free_shipping,
      quantity: params.quantity,
      blocked_quantity: params.blocked_quantity,
      product_id: id,
    },
  });
}

export async function findVariationByCode(code: string) {
  return await prisma.variations.findUnique({ where: { code } });
}

export async function getVariationById(id: number) {
  return await prisma.variations.findUnique({ where: { id } });
}

export async function updateVariation(id: number, params: Variation) {
  return await prisma.variations.update({
    where: { id },
    data: {
      code: params.code,
      name: params.name,
      price: params.price,
      promotion: params.promotion,
      photos: params.photos,
      height_cm: params.height_cm,
      width_cm: params.width_cm,
      depth_cm: params.depth_cm,
      weight_kg: params.weight_kg,
      free_shipping: params.free_shipping,
      quantity: params.quantity,
      blocked_quantity: params.blocked_quantity,
    },
  });
}

export const variationRepository = {
  getVariationByIdProduct,
  createVariation,
  findVariationByCode,
  getVariationById,
  updateVariation
};
