-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_client_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "client_id" DROP NOT NULL,
ALTER COLUMN "permission" SET DEFAULT 'client';

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
