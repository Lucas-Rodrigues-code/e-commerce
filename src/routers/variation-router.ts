import { getVariationByIdProduct } from "../controllers/variation-controller";
import {
  authenticateRoleAdmin,
  authenticateToken,
} from "../middlewares/validationToken-middleware";
import { Router } from "express";

const variationRouter = Router();

variationRouter

  .get("/", getVariationByIdProduct)
  .post("/:id")
  //admin
  .post("/")
  .put("/:id")
  .delete("/:id");

export { variationRouter };
