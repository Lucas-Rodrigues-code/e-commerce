import prisma from "../database/database";

async function getRatingByIdProduct(id: number) {
    return await prisma.reviews.findMany({ where: { product_id: id } });
};

async function getRatingById(id: number) {
    return await prisma.reviews.findUnique({ where: { id } });
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

async function deleteRating(id: number) {
    return await prisma.reviews.delete({ where: { id } });
};

export const ratingRepository = {
    getRatingByIdProduct,
    createRating,
    deleteRating,
    getRatingById
};