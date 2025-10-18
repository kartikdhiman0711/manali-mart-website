"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
  detailedDescription: string;
  brand: string;
  weight: string;
  ingredients: string;
}

interface ProductsGridProps {
  category?: string; // optional — allows category filtering
}

export default function ProductsGrid({ category }: ProductsGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Fetch products from the API
  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;
  
    setLoading(true);
    try {
      const limit = 10;
      const query = new URLSearchParams({
        limit: limit.toString(),
        skip: ((page - 1) * limit).toString(),
      });
      if (category) query.append("category", category);
  
      const res = await fetch(`/api/products?${query.toString()}`);
      const data = await res.json();
  
      const fetchedProducts = data.products || [];
  
      if (fetchedProducts.length < limit) setHasMore(false);
      setProducts((prev) => [...prev, ...fetchedProducts]);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  }, [page, category, hasMore, loading]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Infinite scroll observer
  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Reset products when category changes
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => {
        const isLast = index === products.length - 1;
        return (
          <Card
            key={product.id}
            ref={isLast ? lastProductRef : null}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-lg w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2">
                {product.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {product.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-bold">{product.price}</span>
                <span className="text-sm line-through text-gray-400">
                  {product.originalPrice}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {loading && (
        <div className="col-span-full text-center py-4 text-gray-500">
          Loading more products...
        </div>
      )}

      {!hasMore && !loading && products.length > 0 && (
        <div className="col-span-full text-center py-4 text-gray-500">
          No more products to load.
        </div>
      )}
    </div>
  );
}
