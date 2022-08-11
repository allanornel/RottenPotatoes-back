/*
  Warnings:

  - You are about to drop the column `profile_image_url` on the `users` table. All the data in the column will be lost.
  - Added the required column `picture` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "profile_image_url",
ADD COLUMN     "picture" TEXT NOT NULL;
