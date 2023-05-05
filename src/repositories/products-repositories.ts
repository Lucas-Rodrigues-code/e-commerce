import { Products } from "../protocols";
import prisma from "../database/database";
import { Prisma } from "@prisma/client";

async function createProduct(params: Products) {
    return await prisma.products.create({
        data: {
            title: params.title,
            description: params.description,
            photos: params.photos,
            price: params.price,
            promotion: params.promotion,
            sku: params.sku,
            category_id: params.category_id
        },
        include: { categories: { select: { name: true } } }
    });
};

async function findProductByTitle(title: string) {
    return await prisma.products.findFirst({ where: { title } });
};

export const productsRepository = {
    createProduct,
    findProductByTitle
};