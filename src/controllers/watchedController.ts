import { Request, Response } from "express";
import { toggleWatched } from "../services/watchedService.js";

export async function postWatched(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;
  await toggleWatched(+id, user.id);
  res.sendStatus(201);
}
