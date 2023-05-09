import { createVariationSchema, updateVariationSchema } from "../schemas/variation-schema";
import { Request, Response, NextFunction } from "express";

export function validateBodyCreateValidation(req: Request, res: Response, next: NextFunction) {
  const { error } = createVariationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}

export function validateBodyUpdateValidation(req: Request, res: Response, next: NextFunction) {
    const { error } = updateVariationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    next();
  }
