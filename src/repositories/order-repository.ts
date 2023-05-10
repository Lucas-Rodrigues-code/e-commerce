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

async function getCartByIdOrder(id: number) {
    return await prisma.cart.findFirst({
        where: { order_id: id }
    })
};

async function getAllOrderClient(id: number) {
    return await prisma.order.findMany({
        where: { client_id: id }
    })
};

async function getOrderByIdClient(id: number) {
    return await prisma.order.findFirst({ where: { client_id: id } });
};


export const orderRepository = {
    getAllOrders,
    getOrderById,
    deleteOrder,
    getCartByIdOrder,
    getAllOrderClient,
    getOrderByIdClient
};