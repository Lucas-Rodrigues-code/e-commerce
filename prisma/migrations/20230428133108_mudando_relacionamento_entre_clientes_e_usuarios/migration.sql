-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_user_fkey";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "user" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_fkey" FOREIGN KEY ("user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
