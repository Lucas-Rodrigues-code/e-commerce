import { categoryRepository } from "../repositories/category-repository";

async function getAllCategory() {
    return await categoryRepository.getAllCategory();
};
export const categoryService = {
    getAllCategory,
};