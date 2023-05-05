import { categoryRepository } from "../repositories/category-repository";
import { notFoundError } from "../errors/not-found-error"

async function getAllCategory() {
    const categories = await categoryRepository.getAllCategory();
    if (!categories) throw notFoundError();
    return categories;
};
async function getAllCategoryAvailable() {
    const categories = await categoryRepository.getAllCategoryAvailable();
    if (!categories) throw notFoundError();
    return categories;
};

async function getCategoryById(id: number) {
    const category = await categoryRepository.getCategoryById(id);
    if (!category) throw notFoundError();
    return category;
};

async function createCategory(name: string, code: string) {
    const existCategoryName = await categoryRepository.findCategoryByName(name)
    if (existCategoryName) throw new Error("Already exists a category with that name!!")
    return await categoryRepository.createCategory(name, code);
};

async function updateCategory(id: number, name: string, code: string, availability: boolean) {
    if (name) {
        const existCategoryName = await categoryRepository.findCategoryByName(name)
        if (existCategoryName) throw new Error("Already exists a category with that name!!")
    };
    return await categoryRepository.updateCategory(id, name, code, availability);
};

async function deleteCategory(id: number) {
    const category = await categoryRepository.getCategoryById(id);
    if (!category) throw notFoundError();
    return await categoryRepository.deleteCategory(id);
};

export const categoryService = {
    getAllCategory,
    createCategory,
    getAllCategoryAvailable,
    getCategoryById,
    updateCategory,
    deleteCategory
};