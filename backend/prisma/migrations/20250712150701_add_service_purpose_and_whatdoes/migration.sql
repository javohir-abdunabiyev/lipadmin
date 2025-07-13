-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "purpose" TEXT,
ADD COLUMN     "whatdoes" TEXT;

-- AlterTable
ALTER TABLE "ServiceFeature" ADD COLUMN     "purpose" TEXT;
