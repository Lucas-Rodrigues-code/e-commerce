import { ratingRepository } from "../repositories/rating-repository";

async function getRatingByIdProduct(id: number) {
    return await ratingRepository.getRatingByIdProduct(id);
};

export const ratingService = {
    getRatingByIdProduct
};