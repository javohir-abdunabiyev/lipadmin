/*
  Warnings:

  - Added the required column `finished` to the `ConsultationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConsultationRequest" ADD COLUMN     "finished" BOOLEAN NOT NULL;
