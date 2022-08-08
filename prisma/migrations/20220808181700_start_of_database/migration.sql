-- CreateEnum
CREATE TYPE "productionType" AS ENUM ('album', 'movie', 'series');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_image_url" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "release" INTEGER,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "productionType" NOT NULL,

    CONSTRAINT "productions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watched" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productionId" INTEGER NOT NULL,

    CONSTRAINT "watched_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productionId" INTEGER NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "ratingComment" TEXT,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "watched" ADD CONSTRAINT "watched_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watched" ADD CONSTRAINT "watched_productionId_fkey" FOREIGN KEY ("productionId") REFERENCES "productions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_productionId_fkey" FOREIGN KEY ("productionId") REFERENCES "productions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
