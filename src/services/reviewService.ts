import { find, insert } from "../repositories/reviewRepository.js";
import { conflictError } from "../utils/errorUtils.js";

export async function insertReview(productionId: number, userId: number, rating: number, ratingComment?: string) {
  const findReview = await find(productionId, userId);
  if (findReview) throw conflictError("You already reviewed this production");
  await insert(productionId, userId, rating, ratingComment);
}
