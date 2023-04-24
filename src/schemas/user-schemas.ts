import Joi from "joi";

export const userLoginSchema = Joi.object({
    email:Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const userCreateSchema = Joi.object({
    name:Joi.string().min(3).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

export const userUpdateSchema = Joi.object({
    name:Joi.string().min(3),
    email:Joi.string().email(),
    password: Joi.string().min(6),
});