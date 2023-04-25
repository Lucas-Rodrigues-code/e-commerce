import { getAllClients, getClientById, getClientByName, getOrder, getOrderByIdCLient, putClient } from "../controllers/clients-controller";
import { Router } from "express";

const clientRouter = Router();

clientRouter
    // admim
    .get("/", getAllClients)
    .get("/search/:search/order", getOrder)
    .get("/search/:search", getClientByName)

    .get("/admin/:id",getClientById)
    .get("/admin/:id/:order",getOrderByIdCLient)

    .put("/admin/:id",putClient)
    // client
    .get("/:id")

    .post("/")
    .put("/:id")
    .delete("/:id")

export { clientRouter };