import prisma from "../database/database";

async function getAllCategory() {
    return await prisma.categories.findMany();
};

async function getAllCategoryAvailable() {
    return await prisma.categories.findMany({ where: { availability: true } });
};

async function getCategoryById(id: number) {
    return await prisma.categories.findUnique({ where: { id } });
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
    return await prisma.categories.findFirst({ where: { name } });
};

async function updateCategory(id: number, name: string, code: string, availability: boolean) {
    return await prisma.categories.update({
        where: { id },
        data:{
            name,
            code,
            availability
        }
    })
};

export const categoryRepository = {
    getAllCategory,
    createCategory,
    findCategoryByName,
    getAllCategoryAvailable,
    getCategoryById,
    updateCategory
};