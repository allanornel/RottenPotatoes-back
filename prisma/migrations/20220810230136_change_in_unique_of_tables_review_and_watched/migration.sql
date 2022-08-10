/*
  Warnings:

  - A unique constraint covering the columns `[userId,productionId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,productionId]` on the table `watched` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reviews_userId_productionId_key" ON "reviews"("userId", "productionId");

-- CreateIndex
CREATE UNIQUE INDEX "watched_userId_productionId_key" ON "watched"("userId", "productionId");
