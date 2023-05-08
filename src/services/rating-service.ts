import { notFoundError } from "../errors/not-found-error";
import { ratingRepository } from "../repositories/rating-repository";
import { userRepository } from "../repositories/user-repository"

async function getRatingByIdProduct(id: number) {
    return await ratingRepository.getRatingByIdProduct(id);
};

async function createRating(id: number, name: string, text: string, score: number, user_id: number) {
    const existProduct = await getRatingByIdProduct(id);
    if (existProduct.length === 0) throw notFoundError();
    const user = await userRepository.getUserById(user_id)
    if (!user) throw notFoundError();
    return await ratingRepository.createRating(id, name, text, score, user_id);
};

async function deleteRating(id: number) {
    const existProduct = await ratingRepository.getRatingById(id);
    if (!existProduct) throw notFoundError();
    return await ratingRepository.deleteRating(id);
};

export const ratingService = {
    getRatingByIdProduct,
    createRating,
    deleteRating
};