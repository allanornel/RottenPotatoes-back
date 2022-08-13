import { prisma } from "../database.js";

export async function insert(productionId: number, userId: number) {
  await prisma.watched.create({ data: { productionId, userId } });
}

export async function find(productionId: number, userId: number) {
  const result = await prisma.watched.findFirst({ where: { productionId, userId } });
  return result;
}

export async function deleteWatched(id: number) {
  const result = await prisma.watched.delete({ where: { id } });
}
