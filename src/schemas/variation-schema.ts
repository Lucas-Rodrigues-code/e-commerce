import Joi from "joi";

export const createVariationSchema = Joi.object({
  code: Joi.string().min(3).required(),
  name: Joi.string().min(3).required(),
  price: Joi.number().strict().required(),
  promotion: Joi.number().strict().required(),
  photos: Joi.array().items(Joi.string()).required(),
  height_cm: Joi.number().strict().required(),
  width_cm: Joi.number().strict().required(),
  depth_cm: Joi.number().strict().required(),
  weight_kg: Joi.number().strict().required(),
  free_shipping: Joi.boolean(),
  quantity: Joi.number().strict().required(),
  blocked_quantity: Joi.number().strict(),
});

export const updateVariationSchema = Joi.object({
  code: Joi.string().min(3),
  name: Joi.string().min(3),
  price: Joi.number().strict(),
  promotion: Joi.number().strict(),
  photos: Joi.array().items(Joi.string()),
  height_cm: Joi.number().strict(),
  width_cm: Joi.number().strict(),
  depth_cm: Joi.number().strict(),
  weight_kg: Joi.number().strict(),
  free_shipping: Joi.boolean(), //
  quantity: Joi.number().strict(),
  blocked_quantity: Joi.number().strict(), //
});
