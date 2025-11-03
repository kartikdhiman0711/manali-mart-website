CREATE TABLE "Category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "Product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" varchar(50) NOT NULL,
	"originalPrice" varchar(50),
	"categoryId" integer,
	"subcategoryId" integer,
	"image" text,
	"description" text,
	"detailedDescription" text,
	"brand" varchar(255),
	"weight" varchar(100),
	"ingredients" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Subcategory" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"categoryId" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_Category_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Product" ADD CONSTRAINT "Product_subcategoryId_Subcategory_id_fk" FOREIGN KEY ("subcategoryId") REFERENCES "public"."Subcategory"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_Category_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE cascade ON UPDATE no action;