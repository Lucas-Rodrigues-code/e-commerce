import { categoryService } from "../services/categories-service";
import { Request, Response } from "express";

async function handleRequest(promise: Promise<any>, res: Response, successCode: number) {
    try {
        const data = await promise;
        res.status(successCode).send(data);
    } catch (error) {
        if (error.name === "Error") return res.status(401).send(error.message);
        res.status(500).send("Internal server error");
    };
};

export async function getAllCategory(req: Request, res: Response) {
    handleRequest(categoryService.getAllCategory(), res, 200);
};