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

async function updateProduct(id: number, params: Products) {
    return await prisma.products.update({
        where: { id },
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
    })
};

async function findProductById(id: number) {
    return await prisma.products.findUnique({ where: { id } });
};

export const productsRepository = {
    createProduct,
    findProductByTitle,
    updateProduct,
    findProductById
};