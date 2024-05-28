import { Request, Response } from "express";
import { prisma } from "../../database/Prisma";

export class RegisterController {
  async createTransaction(req: Request, res: Response) {

      try {
        const registerTransaction  = req.body;
        
        if (registerTransaction) {
          const register = await prisma.dtmoney.create({
            data: registerTransaction
          });
      
          return res.status(201).json({ register });
        } else {
          return res.status(400).json({ error: "registerTransaction is missing in the request body" });
        }
      } catch (error) {
        console.error("Error creating register:", error);
        return res.status(500).json({ error: "An error occurred while creating the register" });
      }
    }      
  }