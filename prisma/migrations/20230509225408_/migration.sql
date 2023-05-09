/*
  Warnings:

  - Added the required column `address` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "delivery" ADD COLUMN     "address" JSONB NOT NULL,
ADD COLUMN     "cost" DECIMAL NOT NULL,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deadline" INTEGER NOT NULL,
ADD COLUMN     "order_id" INTEGER NOT NULL,
ADD COLUMN     "payload" JSONB,
ADD COLUMN     "status" VARCHAR NOT NULL,
ADD COLUMN     "tracking_code" VARCHAR,
ADD COLUMN     "type" VARCHAR NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "address" JSONB NOT NULL,
ADD COLUMN     "amount" DECIMAL NOT NULL,
ADD COLUMN     "card" JSONB,
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "delivery_address_same" BOOLEAN DEFAULT true,
ADD COLUMN     "installments" INTEGER DEFAULT 1,
ADD COLUMN     "method" VARCHAR NOT NULL,
ADD COLUMN     "order_id" INTEGER NOT NULL,
ADD COLUMN     "pagseguro_code" VARCHAR,
ADD COLUMN     "payload" JSONB,
ADD COLUMN     "status" VARCHAR NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variation_id" INTEGER NOT NULL,
    "static_product" VARCHAR,
    "quantity" INTEGER DEFAULT 1,
    "unit_price" DECIMAL NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_variation_id_fkey" FOREIGN KEY ("variation_id") REFERENCES "variations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
