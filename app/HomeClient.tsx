"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import Link from 'next/link';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';

interface Category {
  id: string;
  name: string;
  image?: string;
  description?: string;
  itemCount?: string;
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
  image?: string;
  price: number;
  categoryId: string;
  subcategoryId: string;
  originalPrice?: number;
  brand?: string;
  scheme?: string; 
}

const heroSlides = [
  {
    title: "Mega Discount Sale",
    subtitle: "Up to 40% OFF on Dairy Products",
    description: "Fresh milk, paneer, and dairy essentials at unbeatable prices",
    discount: "40% OFF",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Grocery Bonanza",
    subtitle: "25% OFF on Rice & Pulses",
    description: "Premium quality basmati rice and fresh pulses",
    discount: "25% OFF",
    image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Snack Attack",
    subtitle: "Buy 2 Get 1 FREE on Snacks",
    description: "Delicious chips, biscuits, and namkeen varieties",
    discount: "B2G1",
    image: "https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-orange-600 to-red-600"
  },
  {
    title: "Personal Care Special",
    subtitle: "30% OFF on Beauty Products",
    description: "Skincare, haircare, and personal hygiene essentials",
    discount: "30% OFF",
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "from-pink-600 to-purple-600"
  }
];

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const allProducts = categories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );
  
  const featuredProducts = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FloatingSocialIcons />
      
      {/* Hero Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`relative h-full bg-gradient-to-r ${slide.color}`}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-orange-500 text-white px-3 py-1 text-lg font-bold">
                        {slide.discount}
                      </Badge>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6 text-yellow-300">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl mb-8 text-gray-100">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/products">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                          View Products
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg" className="border-white text-orange-500 hover:bg-white hover:text-gray-900 px-8 py-3">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of products across multiple categories
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading categories...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} className="bg-green-700 hover:bg-green-800">
                Retry
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden">
                    {category.image ? (
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <Tag className="h-16 w-16 text-white opacity-50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      {category.itemCount || `${category.subcategories.reduce((acc, sub) => acc + sub.products.length, 0)}+ items`}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>
                      {category.description || `Browse ${category.name.toLowerCase()} products`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <div className="space-y-1 mb-4 flex-grow">
                      <p className="text-sm font-medium text-gray-700">Popular items:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <Badge key={sub.id} variant="secondary" className="text-xs">
                            {sub.name}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.subcategories.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Link href="/products" className="mt-auto">
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        View Products
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Now</h2>
            <p className="text-xl text-gray-600">
              Explore what's popular and loved by our customers
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => {
                const category = categories.find(c => c.id === product.categoryId);
                return (
                  <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={product.image || 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300'} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-blue-600">
                        {category?.name || 'Product'}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2 flex-shrink-0">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-grow">
                      <p className="text-sm text-gray-600 mb-3 flex-grow">
                        {product.description || 'Quality product from our store'}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-green-700">₹{product.price}</span>
                        <Tag className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No trending products available</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 px-8 py-3">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-green-100 mb-8">
              Get notified about new products and special offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}