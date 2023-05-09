import { validateBodyCreateValidation } from "../middlewares/variation-validation";
import {
  createVariation,
  getVariationByIdProduct,
} from "../controllers/variation-controller";
import {
  authenticateRoleAdmin,
  authenticateToken,
} from "../middlewares/validationToken-middleware";
import { Router } from "express";

const variationRouter = Router();

variationRouter

  .get("/", getVariationByIdProduct)
  .get("/:id")
  //admin
  .post("/:id", validateBodyCreateValidation, createVariation)
  .put("/:id")
  .delete("/:id");

export { variationRouter };
