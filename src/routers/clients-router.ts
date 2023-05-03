import { authenticateRoleAdmin, authenticateToken } from "../middlewares/validationToken-middleware";
import {
    createClient,
    deleteClient,
    getAllClients,
    getClientById,
    getClientByName,
    getOrder,
    getOrderByIdCLient,
    putClient,
} from "../controllers/clients-controller";
import { Router } from "express";

const clientRouter = Router();

clientRouter
    // admim
    .get("/admin", getAllClients)
    .get("/search/:search/order", getOrder)
    .get("/search/:search", getClientByName)
    .get("/admin/:id", getClientById)
    .get("/admin/:id/:order", getOrderByIdCLient)
    .put("/admin/:id", putClient)
    // client
    .get("/:id", authenticateToken, authenticateRoleAdmin, getClientById)
    .post("/", createClient)
    .put("/:id", putClient)
    .delete("/:id", deleteClient)

export { clientRouter };