import { productService } from "../services/products-service";
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

export async function createProduct(req: Request, res: Response) {
    const body = req.body;
    handleRequest(productService.createProduct(body), res, 201);
};