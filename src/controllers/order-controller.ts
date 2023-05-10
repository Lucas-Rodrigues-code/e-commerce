import { orderService } from "../services/order-service";
import { Request, Response } from "express";

async function handleRequest(promise: Promise<any>, res: Response, successCode: number) {
    try {
        const data = await promise;
        res.status(successCode).send(data);
    } catch (error) {
        if (error.name === "Error") return res.status(401).send(error.message);
        if (error.name === "NotFoundError") return res.status(404).send(error.message);
        res.status(500).send("Internal server error");
    };
};

export async function getAllOrders(req: Request, res: Response) {
    handleRequest(orderService.getAllOrders(), res, 200);
};

export async function getOrderById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(orderService.getOrderById(id), res, 200);
};

export async function deleteOrder(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(orderService.deleteOrder(id), res, 200);
};

export async function getCartByIdOrder(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(orderService.getCartByIdOrder(id), res, 200);
};

export async function getAllOrderClient(req: Request, res: Response) {
    const idClient = parseInt(req.query.id.toString());
    handleRequest(orderService.getAllOrderClient(idClient), res, 200);
};

