import { Request, Response } from "express";
import { insertReview } from "../services/reviewService.js";

export async function postReview(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;
  const { rating, ratingComment } = req.body;
  await insertReview(+id, user.id, rating, ratingComment);
  res.sendStatus(201);
}
