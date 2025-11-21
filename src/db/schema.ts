import {
    pgTable,
    serial,
    varchar,
    text,
    integer,
    timestamp,
  } from "drizzle-orm/pg-core";
  
  // 🏷️ Category Table
  export const Category = pgTable("Category", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    image: varchar("image", { length: 500 }),
    description: text("description"),
    itemCount: varchar("itemCount", { length: 50 }),
  });
  
  // 🗂️ Subcategory Table
  export const Subcategory = pgTable("Subcategory", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    categoryId: integer("categoryId")
      .references(() => Category.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  });
  
  // 🛒 Product Table
  export const Product = pgTable("Product", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    price: varchar("price", { length: 50 }).notNull(),
    originalPrice: varchar("originalPrice", { length: 50 }),
    scheme: varchar("scheme", { length: 255 }),
    categoryId: integer("categoryId")
      .references(() => Category.id, { onDelete: "set null" }),
    subcategoryId: integer("subcategoryId")
      .references(() => Subcategory.id, { onDelete: "set null" }),
    image: text("image"),
    description: text("description"),
    detailedDescription: text("detailedDescription"),
    brand: varchar("brand", { length: 255 }),
    weight: varchar("weight", { length: 100 }),
    ingredients: text("ingredients"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  });
  