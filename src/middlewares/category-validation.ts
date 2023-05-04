import { Request, Response, NextFunction } from "express";
import { createCategorySchema } from "../schemas/category-schemas";

export function validateBodyCreateCatgory(req: Request, res: Response, next: NextFunction) {
    const { error } = createCategorySchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    next();
}