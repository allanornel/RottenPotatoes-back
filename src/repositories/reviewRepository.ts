import { prisma } from "../database.js";

export async function insert(productionId: number, userId: number, rating: number, ratingComment?: string) {
  await prisma.review.create({ data: { productionId, userId, rating, ratingComment } });
}

export async function find(productionId: number, userId: number) {
  const result = await prisma.review.findFirst({ where: { productionId, userId } });
  return result;
}
