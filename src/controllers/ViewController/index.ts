import { Request, Response } from "express";
import { prisma } from "../../database/Prisma";


export class ViewController {
  async viewTransaction(req: Request, res: Response) {

    try {
      const viewData = await prisma.dtmoney.findMany({take:10});
      return res.json({viewData: viewData}).status(200);
    } catch (err) {
      console.log("Error when seeing transitional: " + err);
    }

  }
}