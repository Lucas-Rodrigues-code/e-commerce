import { notFoundError } from "../errors/not-found-error";
import { Products } from "../protocols";
import { productsRepository } from "../repositories/products-repositories";

async function createProduct(params: Products) {
    const thereIsTitle = await productsRepository.findProductByTitle(params.title);
    if (thereIsTitle) throw new Error("A product with the same name already exists");
    return await productsRepository.createProduct(params);
};

async function updateProduct(id: number, params: Products) {
    if (params.title) {
        const thereIsTitle = await productsRepository.findProductByTitle(params.title);
        if (thereIsTitle) throw new Error("A product with the same name already exists");
    }

    const existProduct = await productsRepository.findProductById(id);
    if (!existProduct) throw notFoundError();
    return await productsRepository.updateProduct(id, params);
};

async function deleteProduct(id: number) {
    const existProduct = await productsRepository.findProductById(id);
    if (!existProduct) throw notFoundError();
    return await productsRepository.deleteProduct(id);
};

async function getAllProducts() {
    const products = await productsRepository.getAllProducts();
    if (!products) throw notFoundError();
    return products
};

async function getAllProductAvailable() {
    const products = await productsRepository.getAllProductAvailable();
    if (!products) throw notFoundError();
    return products;
};

export async function getProductByName(name: string) {
    const products = await productsRepository.getProductByName(name);
    if (products.length === 0) throw notFoundError();
    return products;
};

export async function getProductById(id: number) {
    const product = await productsRepository.getProductById(id);
    if (!product) throw notFoundError();
    return product;
};
export const productService = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getAllProductAvailable,
    getProductByName,
    getProductById
};