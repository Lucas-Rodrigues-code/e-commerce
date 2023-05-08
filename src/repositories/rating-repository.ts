import prisma from "../database/database";

async function getRatingByIdProduct(id: number) {
    return await prisma.reviews.findMany({ where: { product_id: id } });
};

async function createRating(id: number, name: string, text: string, score: number, user_id: number) {
    return await prisma.reviews.create({
        data: {
            name,
            text,
            score,
            product_id: id,
            user_id
        }
    })
};

export const ratingRepository = {
    getRatingByIdProduct,
    createRating
};