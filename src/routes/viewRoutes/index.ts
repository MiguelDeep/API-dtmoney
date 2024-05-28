import { Router } from "express";
import { ViewController } from "../../controllers/ViewController";

export const routesView = Router();
const transaction = new ViewController()

routesView.get("/view_transaction", transaction.viewTransaction);