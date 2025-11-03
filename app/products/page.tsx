"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  price: number;
  categoryId: string;
  subcategoryId: string;
}

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Fetch from your real API (no hardcoded data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ✅ Flatten all products for filtering
  const allProducts = categories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );

  // ✅ Filter logic
  const filteredProducts = allProducts.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      !selectedCategory || p.categoryId === selectedCategory;
    const matchSubcategory =
      !selectedSubcategory || p.subcategoryId === selectedSubcategory;
    return matchSearch && matchCategory && matchSubcategory;
  });

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <>
    <Navbar/>
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* --- Left Sidebar: Category Accordion --- */}
      <div className="w-full lg:w-1/4">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant={!selectedCategory ? "default" : "ghost"}
              className="w-full mb-2"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
            >
              All Products
            </Button>

            <Accordion type="single" collapsible>
              {categories.map((cat) => (
                <AccordionItem key={cat.id} value={cat.id}>
                  <AccordionTrigger
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedSubcategory(null);
                    }}
                  >
                    {cat.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    {cat.subcategories.map((sub) => (
                      <Button
                        key={sub.id}
                        variant={
                          selectedSubcategory === sub.id ? "default" : "ghost"
                        }
                        className="w-full justify-start text-sm"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSelectedSubcategory(sub.id);
                        }}
                      >
                        {sub.name}
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* --- Right Side: Product Grid --- */}
      <div className="w-full lg:w-3/4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            {selectedSubcategory
              ? categories
                  .flatMap((c) => c.subcategories)
                  .find((s) => s.id === selectedSubcategory)?.name
              : selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name
              : "All Products"}
          </h2>

          <Input
            placeholder="Search products..."
            className="w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Card key={p.id}>
                <img
                  src={p.imageUrl || "/placeholder.jpg"}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-2">
                    {p.description || "No description available."}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-green-700">
                      ₹{p.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
