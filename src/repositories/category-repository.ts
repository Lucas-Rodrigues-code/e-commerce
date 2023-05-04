import prisma from "../database/database";

async function getAllCategory() {
    return await prisma.categories.findMany()
};

async function createCategory(name: string, code: string) {
    return await prisma.categories.create({
        data: {
            name,
            code
        }
    });
};

async function findCategoryByName(name: string) {
    return await prisma.categories.findFirst({ where: { name } })
};

export const categoryRepository = {
    getAllCategory,
    createCategory,
    findCategoryByName
};