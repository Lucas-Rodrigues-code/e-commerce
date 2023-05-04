import { categoryRepository } from "../repositories/category-repository";

async function getAllCategory() {
    return await categoryRepository.getAllCategory();
};

async function createCategory(name: string, code: string) {
    const existCategoryName = await categoryRepository.findCategoryByName(name)
    if (existCategoryName) throw new Error("Already exists a category with that name!!")
    return await categoryRepository.createCategory(name, code);
};
export const categoryService = {
    getAllCategory,
    createCategory
};