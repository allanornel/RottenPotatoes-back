import { Request, Response } from "express";
import { insertWatched } from "../services/watchedService.js";

export async function postWatched(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;
  await insertWatched(+id, user.id);
  res.sendStatus(201);
}
