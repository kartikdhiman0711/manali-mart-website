"use client";

import { useState, useEffect, use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Info, CheckCircle, AlertCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';

interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription?: string;
  image?: string;
  price: number;
  categoryId: string;
  subcategoryId: string;
  originalPrice?: number;
  brand?: string;
  scheme?: string; 
}

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

// Helper function to generate slug
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function ProductDetailClient({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [categoryName, setCategoryName] = useState<string>('');
  const [subcategoryName, setSubcategoryName] = useState<string>('');
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch data");
        const categories: Category[] = await res.json();

        const searchSlug = resolvedParams.slug;

        let foundProduct: Product | null = null;
        let foundCategory: Category | null = null;
        let foundSubcategory: Subcategory | null = null;

        for (const category of categories) {
          for (const subcategory of category.subcategories) {
            const prod = subcategory.products.find(p => generateSlug(p.name) === searchSlug);
            if (prod) {
              foundProduct = prod;
              foundCategory = category;
              foundSubcategory = subcategory;
              break;
            }
          }
          if (foundProduct) break;
        }

        if (!foundProduct) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        setProduct(foundProduct);
        setCategoryName(foundCategory?.name || '');
        setSubcategoryName(foundSubcategory?.name || '');

        if (foundSubcategory) {
          const similar = foundSubcategory.products
            .filter(p => p.id !== foundProduct.id)
            .slice(0, 3);
          setSimilarProducts(similar);
        }

      } catch (err) {
        console.error(err);
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return <ProductNotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <FloatingSocialIcons />
    
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-green-700">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/products">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.image || 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.scheme && (
                <div className="absolute top-4 left-2 flex gap-2">
                  <Badge className="bg-red-600">SALE</Badge>
                  <Badge className="bg-green-600">{product.scheme}</Badge>
                </div>
              )}
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className='text-red-600'>*</span> Images are for representation purposes only. Every effort is made to maintain accuracy of all information displayed. Refer Manali Mart Terms & Conditions to know more. Product packaging of actual product delivered may differ based on stock.
              </p>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{categoryName}</Badge>
                <Badge variant="outline">{subcategoryName}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                {product.brand && (
                  <Badge className="bg-blue-600">{product.brand}</Badge>
                )}
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-700">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
                {product.scheme && (
                  <Badge className="bg-green-600 text-white px-3 py-1">
                    {product.scheme}
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || 'No description available'}
                </p>
              </div>
              
              {product.detailedDescription && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Details</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </div>
              )}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center space-x-2">
                    <Package className="h-4 w-4" />
                    <span>Product Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 text-sm">
                    {product.brand && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Brand:</span>
                        <span className="font-medium">{product.brand}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{subcategoryName}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center space-x-2">
                    <Info className="h-4 w-4" />
                    <span>Availability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700 font-medium">In Stock</span>
                  </div>
                  <p className="text-sm text-gray-600">Visit our store to purchase this product</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map(similar => (
                <Card key={similar.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={similar.image || 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'} 
                      alt={similar.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {similar.scheme && (
                      <Badge className="absolute top-2 right-2 bg-green-600">
                        {similar.scheme}
                      </Badge>
                    )}
                    {similar.brand && (
                      <Badge className="absolute top-2 left-2 bg-blue-600">{similar.brand}</Badge>
                    )}
                  </div>
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg">{similar.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{subcategoryName}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                      {similar.description || 'No description available'}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-green-700">₹{similar.price}</span>
                        <Tag className="h-5 w-5 text-gray-400" />
                      </div>
                      <Link href={`/products/${generateSlug(similar.name)}`}>
                        <Button className="w-full bg-green-700 hover:bg-green-800">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <AlertCircle className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the product you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button className="bg-green-700 hover:bg-green-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}