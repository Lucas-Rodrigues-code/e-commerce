import prisma from "../database/database";

async function getAllOrders() {
    return await prisma.order.findMany();
};

async function getOrderById(id: number) {
    return await prisma.order.findUnique({ where: { id } });
};

export const orderRepository = {
    getAllOrders,
    getOrderById
};