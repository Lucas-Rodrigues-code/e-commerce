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

export async function updateProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const body = req.body;
    handleRequest(productService.updateProduct(id, body), res, 200);
};

export async function deleteProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(productService.deleteProduct(id), res, 200);
};

export async function getAllProducts(req: Request, res: Response) {
    handleRequest(productService.getAllProducts(), res, 200);
};

export async function getAllProductAvailable(req: Request, res: Response) {
    handleRequest(productService.getAllProductAvailable(), res, 200);
};

export async function getProductByName(req: Request, res: Response) {
    const name = req.params.search.toLowerCase();
    handleRequest(productService.getProductByName(name), res, 200);
};