export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const category = searchParams.get("category") || "";
    const q = searchParams.get("q") || "";

    const where: any = {};
    if (category) where.category = category;
    if (q)
      where.OR = [{ name: { contains: q, mode: "insensitive" } }];

    const products = await prisma.product.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.product.count({ where });

    return NextResponse.json({
      products,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err: any) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}
