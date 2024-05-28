import { Router } from "express";
import { RegisterController } from "../../controllers/registerController";

export const routeRegister = Router();
const registerTransaction = new RegisterController()

routeRegister.post("/create_transactions", registerTransaction.createTransaction);