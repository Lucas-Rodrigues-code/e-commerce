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

export const productService = {
    createProduct,
    updateProduct
};