import { find } from "../repositories/watchedRepository.js";
import * as productionRepository from "./../repositories/productionRepository.js";

export async function getProductions(userId: number) {
  const arrProd = await productionRepository.get();
  const result = await Promise.all(
    arrProd.map(async (prod) => {
      const verif = await find(prod.id, userId);
      if (verif) {
        return { ...prod, watched: true };
      } else {
        return { ...prod, watched: false };
      }
    })
  );
  return result;
}

export async function getProductionById(id: number, userId: number) {
  const prod = await productionRepository.getById(id);
  const verif = await find(prod.id, userId);
  if (verif) {
    return { ...prod, watched: true };
  } else {
    return { ...prod, watched: false };
  }
}

export async function getWatchedProductions(userId: number) {
  const result = await productionRepository.getWatchedProductions(userId);
  return result;
}
