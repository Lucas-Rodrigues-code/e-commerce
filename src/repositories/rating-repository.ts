import prisma from "../database/database";

async function getRatingByIdProduct(id: number) {
    await prisma.reviews.findMany({ where: { product_id: id } });
};

export const ratingRepository = {
    getRatingByIdProduct
};