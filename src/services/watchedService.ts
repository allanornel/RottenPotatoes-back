import { conflictError } from "../utils/errorUtils.js";
import * as watchedRepository from "./../repositories/watchedRepository.js";

export async function toggleWatched(productionId: number, userId: number) {
  const findWatched = await watchedRepository.find(productionId, userId);
  if (findWatched) return await watchedRepository.deleteWatched(findWatched.id);

  return await watchedRepository.insert(productionId, userId);
}
