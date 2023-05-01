/*
  Warnings:

  - You are about to drop the column `address` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `clients` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - A unique constraint covering the columns `[address_id]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[client_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_address_fkey";

-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_user_fkey";

-- DropIndex
DROP INDEX "clients_user_key";

-- AlterTable
ALTER TABLE "address" ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "number" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "cep" DROP NOT NULL;

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "address",
DROP COLUMN "user",
ADD COLUMN     "address_id" INTEGER,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "client_id" INTEGER,
ADD COLUMN     "permission" VARCHAR(12) DEFAULT 'cliente',
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR;

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "availability" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "availability" BOOLEAN DEFAULT true,
    "description" TEXT NOT NULL,
    "photos" TEXT[],
    "price" DECIMAL(10,2) NOT NULL,
    "promotion" DECIMAL(10,2),
    "sku" VARCHAR(50) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(55) NOT NULL,
    "text" TEXT NOT NULL,
    "score" INTEGER DEFAULT 1,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variations" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "promotion" DECIMAL(10,2),
    "photos" TEXT[],
    "height_cm" DECIMAL(10,2) NOT NULL,
    "width_cm" DECIMAL(10,2) NOT NULL,
    "depth_cm" DECIMAL(10,2) NOT NULL,
    "weight_kg" DECIMAL(10,2) NOT NULL,
    "free_shipping" BOOLEAN DEFAULT false,
    "quantity" INTEGER DEFAULT 0,
    "blocked_quantity" INTEGER DEFAULT 0,
    "product_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "variations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "variations_code_key" ON "variations"("code");

-- CreateIndex
CREATE UNIQUE INDEX "clients_address_id_key" ON "clients"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_client_id_key" ON "users"("client_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "variations" ADD CONSTRAINT "variations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
