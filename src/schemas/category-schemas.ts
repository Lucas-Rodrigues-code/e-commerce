import Joi, { object } from "joi";

export const createCategorySchema = Joi.object({
    name: Joi.string().min(3).required(),
    code: Joi.string().min(3).required()
})