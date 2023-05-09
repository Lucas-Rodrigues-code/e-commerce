import {
  authenticateRoleAdmin,
  authenticateToken,
} from "../middlewares/validationToken-middleware";
import { Router } from "express";

const orderRouter = Router();

orderRouter
  .all("/*", authenticateToken)

  // ADMIN
  .get("/admin")
  .get("/admin/:id")
  .delete("/admin/:id")
  // -- carrinho
  .get("/admin/:id/cart")

  // CLIENTE
  .get("/")
  .get("/:id")
  .post("/")
  .delete("/:id")
  // -- carrinho
  .get("/:id/cart");

export { orderRouter };
