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
    .get("/admin", authenticateToken, authenticateRoleAdmin, getAllClients)
    .get("/search/:search/order", authenticateToken, authenticateRoleAdmin, getOrder)
    .get("/search/:search", authenticateToken, authenticateRoleAdmin, getClientByName)
    .get("/admin/:id", authenticateToken, authenticateRoleAdmin, getClientById)
    .get("/admin/:id/:order", authenticateToken, authenticateRoleAdmin, getOrderByIdCLient)
    .put("/admin/:id", authenticateToken, authenticateRoleAdmin, putClient)
    // client
    .get("/:id", authenticateToken, getClientById)
    .post("/", authenticateToken, createClient)
    .put("/:id", authenticateToken, putClient)
    .delete("/:id", authenticateToken, deleteClient)

export { clientRouter };