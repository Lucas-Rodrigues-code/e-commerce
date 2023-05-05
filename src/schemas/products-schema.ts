import Joi from "joi";

export const createProductySchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    photos: Joi.array().required(),
    price: Joi.number().required().strict(),
    promotion: Joi.number().strict(),
    sku: Joi.string().min(8).required(),
    category_id: Joi.number().required().strict()
})
