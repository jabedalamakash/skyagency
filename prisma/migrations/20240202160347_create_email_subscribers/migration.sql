-- CreateTable
CREATE TABLE "subcribers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "subcribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subcribers_email_key" ON "subcribers"("email");
