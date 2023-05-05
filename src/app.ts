import express, { json } from "express";
import cors from "cors";
import { userRouter, clientRouter, categoriesRouter, productsRouter } from "./routers";


const app = express();
app
    .use(cors())
    .use(json())
    .get("/health", (_req, res) => res.send("ok"))
    .use("/users", userRouter)
    .use("/clients", clientRouter)
    .use("/categories", categoriesRouter)
    .use("/products", productsRouter)

export default app;
