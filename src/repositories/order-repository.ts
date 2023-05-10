import prisma from "../database/database";

async function getAllOrders() {
    return await prisma.order.findMany();
};

async function getOrderById(id: number) {
    return await prisma.order.findUnique({ where: { id } });
};

async function deleteOrder(id: number) {
    return await prisma.order.delete({ where: { id } });
};

export const orderRepository = {
    getAllOrders,
    getOrderById,
    deleteOrder
};