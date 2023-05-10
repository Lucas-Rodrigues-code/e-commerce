import { deleteOrder, getAllOrders, getOrderById, getCartByIdOrder, getAllOrderClient, getOrderByIdClient } from "../controllers/order-controller";
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
  .delete("/admin/:id",deleteOrder)
  // -- carrinho
  .get("/admin/:id/cart",getCartByIdOrder)

  // CLIENTE
  .get("/", getAllOrderClient)
  .get("/:id",getOrderByIdClient)
  .post("/")
  .delete("/:id")
  // -- carrinho
  .get("/:id/cart");

export { orderRouter };
