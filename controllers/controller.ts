import { Request, Response } from "express";

export class Controller {
    async index(req: Request, res: Response) : Promise<void> {
        res.render('index');
    }

    async login(req: Request, res: Response) : Promise<void> {
        res.render('login');
    }

    async tellTrue(req: Request, res: Response) : Promise<void> {
        res.json({ message: 'True'})
    }
}