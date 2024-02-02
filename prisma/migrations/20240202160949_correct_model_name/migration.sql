/*
  Warnings:

  - You are about to drop the `subcribers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "subcribers";

-- CreateTable
CREATE TABLE "subscribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_email_key" ON "subscribers"("email");
