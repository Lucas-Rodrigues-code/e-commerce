import { categoryService } from "../services/categories-service";
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

export async function getAllCategory(req: Request, res: Response) {
    handleRequest(categoryService.getAllCategory(), res, 200);
};

export async function getAllCategoryAvailable(req: Request, res: Response) {
    handleRequest(categoryService.getAllCategoryAvailable(), res, 200);
};

export async function getCategoryById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    handleRequest(categoryService.getCategoryById(id), res, 200);
};

export async function createCategory(req: Request, res: Response) {
    const { name, code } = req.body;
    handleRequest(categoryService.createCategory(name, code), res, 201);
};

export async function updateCategory(req: Request, res: Response) {
    const { name, code, availability } = req.body;
    const id = parseInt(req.params.id)
    handleRequest(categoryService.updateCategory(id, name, code, availability), res, 201);
};