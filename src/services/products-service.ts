import { Products } from "../protocols";
import { productsRepository } from "../repositories/products-repositories";

async function createProduct(params: Products) {
    const thereIsTitle = await productsRepository.findProductByTitle(params.title);
    if (thereIsTitle) throw new Error("A product with the same name already exists");
    return await productsRepository.createProduct(params);
};

export const productService = {
    createProduct
};