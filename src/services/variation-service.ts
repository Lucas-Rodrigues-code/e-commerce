import { variationRepository } from "../repositories/variation-repository";

export async function getVariationByIdProduct(id: number) {
  return await variationRepository.getVariationByIdProduct(id);
}

export const variationService = {
  getVariationByIdProduct,
};
