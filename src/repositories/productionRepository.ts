import { prisma } from "../database.js";

export async function get() {
  const result = await prisma.production.findMany({ include: { _count: { select: { Watched: true, Review: true } } } });
  return result;
}

export async function getById(id: number) {
  const result = await prisma.production.findUnique({
    where: { id },
    include: { _count: { select: { Watched: true } }, Review: { include: { user: true } } },
  });
  return result;
}

export async function getOrderByWatched() {
  const result = await prisma.production.findMany({ include: { _count: { select: { Watched: true } } }, orderBy: { Watched: { _count: "asc" } } });
  return result;
}

export async function getWatchedProductions(userId: number) {
  const result = await prisma.production.findMany({ where: { Watched: { some: { userId } } } });
  return result;
}
