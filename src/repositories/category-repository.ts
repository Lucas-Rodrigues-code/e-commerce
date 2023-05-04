import prisma from "../database/database";

async function getAllCategory() {
    return await prisma.categories.findMany()
};

export const categoryRepository = {
    getAllCategory
};