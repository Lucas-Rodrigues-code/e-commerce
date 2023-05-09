import express, { json } from "express";
import cors from "cors";
import {
  userRouter,
  clientRouter,
  categoriesRouter,
  productsRouter,
  ratingRouter,
  variationRouter,
  orderRouter,
} from "./routers";

const app = express();
app
  .use(cors())
  .use(json())
  .get("/health", (_req, res) => res.send("ok"))
  .use("/users", userRouter)
  .use("/clients", clientRouter)
  .use("/categories", categoriesRouter)
  .use("/products", productsRouter)
  .use("/rating", ratingRouter)
  .use("/variations", variationRouter)
  .use("/orders", orderRouter);

export default app;
