import { Request, Response } from "express";
import { Controller } from "./controllers/controller";

export interface Route {
    method: 'get' | 'post' | 'put' | 'delete',
    path: string,
    handler: (req: Request, res: Response) => void | Promise<void>,
}

export const routes: Route[] = [{
    method: 'get',
    path: '/example',
    handler: new Controller().index
}, {
    method: 'get',
    path: '/login',
    handler: new Controller().login
}, {
    method: 'get',
    path: '/tellTrue',
    handler: new Controller().tellTrue
}]