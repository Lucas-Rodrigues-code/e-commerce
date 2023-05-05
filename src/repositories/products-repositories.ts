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
            category_id: params.category_id,
            availability: params.availability
        },
        include: { categories: { select: { name: true } } }
    })
};

async function findProductById(id: number) {
    return await prisma.products.findUnique({ where: { id } });
};

async function deleteProduct(id: number) {
    return await prisma.products.delete({ where: { id } });
};

async function getAllProducts() {
    return await prisma.products.findMany({ include: { categories: { select: { name: true } } } });
};

async function getAllProductAvailable() {
    return await prisma.products.findMany({ where: { availability: true } });
};

export async function getProductByName(name: string) {
    return await prisma.products.findMany({
        where: { title: { contains: name } }
    });
};

async function getProductById(id: number) {
    return await prisma.products.findUnique({
        where: { id },
        include: { categories: true, reviews: true, variations: true }
    });
};

export const productsRepository = {
    createProduct,
    findProductByTitle,
    updateProduct,
    findProductById,
    deleteProduct,
    getAllProducts,
    getAllProductAvailable,
    getProductByName,
    getProductById
};