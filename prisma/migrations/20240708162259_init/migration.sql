/*
  Warnings:

  - A unique constraint covering the columns `[ProductId,UserId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_ProductId_UserId_key" ON "Product"("ProductId", "UserId");
