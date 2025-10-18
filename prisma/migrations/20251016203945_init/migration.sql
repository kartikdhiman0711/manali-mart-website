BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [price] NVARCHAR(1000) NOT NULL,
    [originalPrice] NVARCHAR(1000),
    [category] NVARCHAR(1000) NOT NULL,
    [subcategory] NVARCHAR(1000),
    [image] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [detailedDescription] NVARCHAR(1000),
    [brand] NVARCHAR(1000),
    [availability] NVARCHAR(1000),
    [weight] NVARCHAR(1000),
    [ingredients] NVARCHAR(1000),
    [features] NVARCHAR(1000),
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
