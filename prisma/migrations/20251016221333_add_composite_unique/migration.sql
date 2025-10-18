/*
  Warnings:

  - You are about to drop the column `availability` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,weight]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Made the column `originalPrice` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subcategory` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `detailedDescription` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `brand` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ingredients` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Product] ALTER COLUMN [originalPrice] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [subcategory] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [description] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [detailedDescription] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [brand] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [weight] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] ALTER COLUMN [ingredients] NVARCHAR(1000) NOT NULL;
ALTER TABLE [dbo].[Product] DROP COLUMN [availability],
[features];

-- CreateIndex
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_name_weight_key] UNIQUE NONCLUSTERED ([name], [weight]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
