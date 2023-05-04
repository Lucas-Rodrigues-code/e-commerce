import { join } from "@prisma/client/runtime";
import Joi, { object } from "joi";

export const createCategorySchema = Joi.object({
    name: Joi.string().min(3).required(),
    code: Joi.string().min(3).required()
})

export const updateCategorySchema = Joi.object({
    name: Joi.string().min(3),
    code: Joi.string().min(3),
    availability: Joi.boolean()
})