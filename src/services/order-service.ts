import { orderRepository } from "../repositories/order-repository";

async function getAllOrders() {
    return await orderRepository.getAllOrders();
};

async function getOrderById(id:number) {
    return await orderRepository.getOrderById(id);
};

export const orderService = {
    getAllOrders,
    getOrderById
};