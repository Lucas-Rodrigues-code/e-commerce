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

async function getCartByIdOrder(id: number) {
    return await orderRepository.getCartByIdOrder(id);
};

async function getAllOrderClient(id: number) {
    if (!id) throw new Error("Provide a customer id")
    const orders = await orderRepository.getAllOrderClient(id);
    if (orders.length === 0) throw new Error("Not an order with that customer id")
    return orders;
};

async function getOrderByIdClient(id: number) {
    if (!id) throw new Error("Provide a customer id")
    const order = await orderRepository.getOrderByIdClient(id);
    if (!order) throw new Error("Not an order with that customer id")
    return order
};

export const orderService = {
    getAllOrders,
    getOrderById,
    deleteOrder,
    getCartByIdOrder,
    getAllOrderClient,
    getOrderByIdClient
};