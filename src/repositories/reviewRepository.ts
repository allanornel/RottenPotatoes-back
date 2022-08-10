import { prisma } from "../database.js";

export async function insert(productionId: number, userId: number, rating: number, ratingComment?: string) {
  await prisma.review.create({ data: { productionId, userId, rating, ratingComment } });
}
