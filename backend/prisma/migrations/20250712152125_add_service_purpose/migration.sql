/*
  Warnings:

  - You are about to drop the column `purpose` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `whatdoes` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `purpose` on the `ServiceFeature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "purpose",
DROP COLUMN "whatdoes";

-- AlterTable
ALTER TABLE "ServiceFeature" DROP COLUMN "purpose";

-- CreateTable
CREATE TABLE "ServicePurpose" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "ServicePurpose_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServicePurpose" ADD CONSTRAINT "ServicePurpose_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
