/*
  Warnings:

  - Made the column `street` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `number` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cep` on table `address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `availability` on table `categories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `birthday` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `excluded` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address_id` on table `clients` required. This step will fail if there are existing NULL values in that column.
  - Made the column `availability` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `client_id` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `permission` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "address" ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "street" SET NOT NULL,
ALTER COLUMN "number" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "cep" SET NOT NULL;

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "availability" SET NOT NULL;

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "birthday" SET NOT NULL,
ALTER COLUMN "cpf" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL,
ALTER COLUMN "excluded" SET NOT NULL,
ALTER COLUMN "address_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "availability" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "client_id" SET NOT NULL,
ALTER COLUMN "permission" SET NOT NULL;
