import { Request, Response } from "express";
import { ratingService } from "../services/rating-service"

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

export async function getRatingByIdProduct(req: Request, res: Response) {
    const id = parseInt(req.query.product.toString());
    handleRequest(ratingService.getRatingByIdProduct(id), res, 200);
};

export async function createRating(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, text, score, user_id } = req.body;
    handleRequest(ratingService.createRating(id, name, text, score, user_id), res, 201);
};

export async function deleteRating(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    handleRequest(ratingService.deleteRating(id), res, 200);
};