import { notFoundError } from "../errors/not-found-error";
import { Variation } from "../protocols";
import { variationRepository } from "../repositories/variation-repository";

export async function getVariationByIdProduct(id: number) {
  return await variationRepository.getVariationByIdProduct(id);
}

export async function createVariation(id: number, params: Variation) {
  const variationCodeexist = await variationRepository.findVariationByCode(
    params.code
  );
  if (variationCodeexist)
    throw new Error("This code of variation already exist!");
  return await variationRepository.createVariation(id, params);
}

export async function getVariationById(id: number) {
  const variation = await variationRepository.getVariationById(id);
  if (!variation) throw notFoundError();
  return variation;
}

export async function updateVariation(id: number, params: Variation) {
  if (params.code) {
    const variationCodeexist = await variationRepository.findVariationByCode(
      params.code
    );
    if (variationCodeexist)
      throw new Error("This code of variation already exist!");
  }

  return await variationRepository.updateVariation(id, params);
}

export const variationService = {
  getVariationByIdProduct,
  createVariation,
  getVariationById,
  updateVariation,
};
