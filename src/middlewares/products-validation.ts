import { NextFunction, Request, Response } from "express";
import { createProductySchema, updateProductySchema } from "../schemas/products-schema";

export function validateBodyCreateProducts(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = createProductySchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}

export function validateBodyUpdateProducts(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const { error } = updateProductySchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.user = user;
    next();
}
