/*
  Warnings:

  - You are about to drop the column `adminId` on the `Service` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_adminId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "adminId",
ADD COLUMN     "slug" TEXT;
