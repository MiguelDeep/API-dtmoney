import  Express  from "express";
import { routesDtmoney } from "./routes";

export const app = Express();

app.use(Express.json())
app.use(routesDtmoney);

app.listen(3333,() => {
  console.log("listening ");
})