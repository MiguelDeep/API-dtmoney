import { Request, Response } from "express";
import { prisma } from "../../database/Prisma";


export class ViewController {
  async viewTransaction(req: Request, res: Response) {

    try {
      const viewData = await prisma.dtmoney.findMany();
      return res.send(201).json(viewData);
    } catch (err) {
      console.log("Error when seeing transitional: " + err);
    }

  }
}