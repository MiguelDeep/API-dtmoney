import express from "express";
import { routeRegister  } from "./registerRoutes"
import { routesView } from "./viewRoutes"
 
export const routesDtmoney = express.Router();

routesDtmoney.get("/", (req, res) => {
  res.json({ message: "dtmoney 😂😂😂😂😂😂" })
});

routesDtmoney.use(routeRegister)
routesDtmoney.use(routesView)