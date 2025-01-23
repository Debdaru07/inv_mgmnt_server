import { Request, Response } from "express";
import { prisma } from "..";


export const getUsers = async (req: Request, res: Response) : Promise<void> => {
    try {
        const users = await prisma.users.findMany();
        res.json(users);
    } catch(err) {
        res.status(500).json({message: "Error retrieving users"});
    }
}