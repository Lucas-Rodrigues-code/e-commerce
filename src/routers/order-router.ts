import { getAllOrders, getOrderById } from "../controllers/order-controller";
import {
  authenticateRoleAdmin,
  authenticateToken,
} from "../middlewares/validationToken-middleware";
import { Router } from "express";

const orderRouter = Router();

orderRouter
  .all("/*",)

  // ADMIN
  .get("/admin", getAllOrders)
  .get("/admin/:id", getOrderById)
  .delete("/admin/:id",)
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
