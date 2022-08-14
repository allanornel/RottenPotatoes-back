import { Request, Response } from "express";
import * as productionService from "./../services/productionService.js";

export async function getProduction(req: Request, res: Response) {
  const { user } = res.locals;
  const productions = await productionService.getProductions(user.id);
  res.send(productions);
}

export async function getProductionById(req: Request, res: Response) {
  const { id } = req.params;
  const { user } = res.locals;
  const production = await productionService.getProductionById(+id, user.id);
  res.send(production);
}

export async function getWatchedProductions(req: Request, res: Response) {
  const { user } = res.locals;
  const productions = await productionService.getWatchedProductions(user.userId);
  res.send(productions);
}
