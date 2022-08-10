import * as productionRepository from "./../repositories/productionRepository.js";

export async function getProductions() {
  const result = await productionRepository.get();
  return result;
}

export async function getProductionById(id: number) {
  const result = await productionRepository.getById(id);
  return result;
}

export async function getWatchedProductions(userId: number) {
  const result = await productionRepository.getWatchedProductions(userId);
  return result;
}
