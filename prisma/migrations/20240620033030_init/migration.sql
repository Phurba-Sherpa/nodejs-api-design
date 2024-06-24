/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `Update` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `asset` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `body` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Update` table. All the data in the column will be lost.
  - The primary key for the `UpdatePoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `UpdatePoint` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `UpdatePoint` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `UpdatePoint` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UpdatePoint` table. All the data in the column will be lost.
  - You are about to drop the column `updateId` on the `UpdatePoint` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UpdatePoint` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Name` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `ProductId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `UserId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Body` to the `Update` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ProductId` to the `Update` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Update` table without a default value. This is not possible if the table is not empty.
  - The required column `UpdateId` was added to the `Update` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `UpdatedAt` to the `Update` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `UpdatePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `UpdatePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UpdateId` to the `UpdatePoint` table without a default value. This is not possible if the table is not empty.
  - The required column `UpdatePointId` was added to the `UpdatePoint` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `UpdatedAt` to the `UpdatePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `UserId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `Username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_productId_fkey";

-- DropForeignKey
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_updateId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "ownerId",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Name" VARCHAR(50) NOT NULL,
ADD COLUMN     "ProductId" TEXT NOT NULL,
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("ProductId");

-- AlterTable
ALTER TABLE "Update" DROP CONSTRAINT "Update_pkey",
DROP COLUMN "asset",
DROP COLUMN "body",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "productId",
DROP COLUMN "status",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
DROP COLUMN "version",
ADD COLUMN     "Asset" TEXT,
ADD COLUMN     "Body" VARCHAR(255) NOT NULL,
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ProductId" TEXT NOT NULL,
ADD COLUMN     "Status" "UPDATE_STATUS" NOT NULL DEFAULT 'IN_PROGRESS',
ADD COLUMN     "Title" VARCHAR(50) NOT NULL,
ADD COLUMN     "UpdateId" TEXT NOT NULL,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Version" TEXT,
ADD CONSTRAINT "Update_pkey" PRIMARY KEY ("UpdateId");

-- AlterTable
ALTER TABLE "UpdatePoint" DROP CONSTRAINT "UpdatePoint_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "description",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "updateId",
DROP COLUMN "updatedAt",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, 
ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "Name" VARCHAR(255) NOT NULL,
ADD COLUMN     "UpdateId" TEXT NOT NULL,
ADD COLUMN     "UpdatePointId" TEXT NOT NULL,
ADD COLUMN     "UpdatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "UpdatePoint_pkey" PRIMARY KEY ("UpdatePointId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Password" TEXT NOT NULL,
ADD COLUMN     "UserId" TEXT NOT NULL,
ADD COLUMN     "Username" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpdatePoint" ADD CONSTRAINT "UpdatePoint_UpdateId_fkey" FOREIGN KEY ("UpdateId") REFERENCES "Update"("UpdateId") ON DELETE RESTRICT ON UPDATE CASCADE;
