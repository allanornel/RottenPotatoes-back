import { conflictError } from "../utils/errorUtils.js";
import * as watchedRepository from "./../repositories/watchedRepository.js";

export async function insertWatched(productionId: number, userId: number) {
  const findWatched = await watchedRepository.find(productionId, userId);
  if (findWatched) throw conflictError("You already watched this production");

  await watchedRepository.insert(productionId, userId);
}
