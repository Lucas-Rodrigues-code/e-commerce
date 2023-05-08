import Joi from "joi";

export const createRatingSchema = Joi.object({
    name: Joi.string().min(3).required(),
    text: Joi.string().min(3).required(),
    score: Joi.number().strict().required(),
    user_id: Joi.number().strict().required()
});