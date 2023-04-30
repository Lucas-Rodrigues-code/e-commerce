/*
  Warnings:

  - A unique constraint covering the columns `[user]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Made the column `user` on table `clients` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_user_fkey";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "user" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_user_key" ON "clients"("user");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
