import { NextResponse } from "next/server";
import { db } from "@/src/db/drizzle";
import { Category, Subcategory, Product } from "@/src/db/schema";

export async function GET() {
  try {
    const categories = await db.select().from(Category);
    const subcategories = await db.select().from(Subcategory);
    const products = await db.select().from(Product);

    // Nest the structure: Category → Subcategory → Products
    const structured = categories.map(cat => ({
      ...cat,
      subcategories: subcategories
        .filter(sub => sub.categoryId === cat.id)
        .map(sub => ({
          ...sub,
          products: products.filter(p => p.subcategoryId === sub.id),
        })),
    }));

    return NextResponse.json(structured);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
