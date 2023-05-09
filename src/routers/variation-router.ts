import {
  validateBodyCreateValidation,
  validateBodyUpdateValidation,
} from "../middlewares/variation-validation";
import {
  createVariation,
  deleteVariation,
  getVariationById,
  getVariationByIdProduct,
  updateVariation,
} from "../controllers/variation-controller";
import {
  authenticateRoleAdmin,
  authenticateToken,
} from "../middlewares/validationToken-middleware";
import { Router } from "express";

const variationRouter = Router();

variationRouter

  .get("/", getVariationByIdProduct)
  .get("/:id", getVariationById)
  //admin
  .post("/:id",authenticateToken,authenticateRoleAdmin, validateBodyCreateValidation, createVariation)
  .put("/:id",authenticateToken, authenticateRoleAdmin,validateBodyUpdateValidation, updateVariation)
  .delete("/:id",authenticateToken,authenticateRoleAdmin, deleteVariation);

export { variationRouter };
