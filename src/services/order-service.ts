import { notFoundError } from "../errors/not-found-error";
import { orderRepository } from "../repositories/order-repository";

async function getAllOrders() {
    return await orderRepository.getAllOrders();
};

async function getOrderById(id: number) {
    return await orderRepository.getOrderById(id);
};

async function deleteOrder(id: number) {
    const order = await orderRepository.getOrderById(id);
    if (!order) throw notFoundError();
    return await orderRepository.deleteOrder(id);
};

export const orderService = {
    getAllOrders,
    getOrderById,
    deleteOrder
};