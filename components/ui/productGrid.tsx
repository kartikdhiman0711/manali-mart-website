"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  description: string;
}

interface Subcategory {
  id: string;
  name: string;
  products: Product[];
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export default function ProductsGrid() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("Unexpected API response:", data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Loading products...</div>;
  }

  return (
    <div className="p-6 space-y-10">
      {categories.map((cat) => (
        <div key={cat.id}>
          <h2 className="text-3xl font-bold mb-6">{cat.name}</h2>

          {cat.subcategories.map((sub) => (
            <div key={sub.id} className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{sub.name}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sub.products.length > 0 ? (
                  sub.products.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition">
                      <CardHeader className="p-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg font-semibold mb-2">
                          {product.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mb-3">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-700">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm line-through text-gray-400">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No products in this subcategory.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
