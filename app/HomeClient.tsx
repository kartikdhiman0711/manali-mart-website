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

const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const heroSlides = [
  {
    title: "Grand Opening! 🎉",
    subtitle: "Now Open in Manali",
    description: "Visit us at Behind Bran School, 17-18 Mile, Manali. Fresh groceries at unbeatable prices!",
    discount: "NEW",
    image: "https://img.freepik.com/free-vector/shiny-grand-opening-ceremony-invitation-background-business-start-up_1017-61349.jpg?t=st=1765278368~exp=1765281968~hmac=c61797c859a84014c6c3f15a0aa2d22bdc307f0beb4c29aed0456efd91c11928&w=1060",
    color: "from-green-600 to-emerald-800",
    learnMoreLink: "/about"
  },
  {
    title: "Buy 1 Get 1 FREE",
    subtitle: "On Selected Products",
    description: "Amazing BOGO deals on snacks, beverages, and daily essentials. Limited time offer!",
    discount: "BOGO",
    image: "https://img.freepik.com/free-vector/buy-one-get-1-free-festive-season-sale-background_1017-55141.jpg?ga=GA1.1.1109938171.1765277558&semt=ais_se_enriched&w=740&q=80",
    color: "from-orange-600 to-red-600",
    learnMoreLink: "/products"
  },
  {
    title: "Lowest Prices Guaranteed",
    subtitle: "Quality Products, Budget Prices",
    description: "Shop smart with our everyday low prices on groceries, household items, and more",
    discount: "LOW PRICE",
    image: "https://img.freepik.com/free-vector/alert-price-drop-banner-show-now-get-lowest-price-product_1017-45355.jpg?ga=GA1.1.1109938171.1765277558&semt=ais_se_enriched&w=740&q=80",
    color: "from-teal-500 to-green-700",
    learnMoreLink: "/products"
  },
  {
    title: "Special Launch Offers",
    subtitle: "Free Gifts with Purchase",
    description: "Shop for ₹500 and get exciting free gifts! Plus exclusive deals on bulk purchases",
    discount: "FREE GIFT",
    image: "https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?ga=GA1.1.1109938171.1765277558&w=740&q=80",
    color: "from-purple-600 to-pink-600",
    learnMoreLink: "/products"
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
                    <div className="flex gap-4">
                      <Link href="/products">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                          View Products
                        </Button>
                      </Link>
                      <Link href={heroSlides[currentSlide].learnMoreLink}>
                        <Button variant="outline" size="lg" className="border-white text-orange-500 hover:bg-white hover:text-gray-900 px-8 py-3">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-8 md:left-16 bottom-0 md:bottom-auto md:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 md:right-16 bottom-0 md:bottom-auto md:top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
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
              Explore what&apos;s popular and loved by our customers
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
                        <div className="flex items-baseline space-x-2">
                          <span className="text-xl font-bold text-green-700">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through text-xs">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Tag className="h-5 w-5 text-gray-400" />
                      </div>
                      <Link href={`/products/${generateSlug(product.name)}`}>
                        <Button className="w-full mt-3 bg-green-700 hover:bg-green-800 text-xs py-1.5">
                          View Product
                        </Button>
                      </Link>
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Mart?</h2>
            <p className="text-gray-600">Your trusted neighborhood store in Manali</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Lowest prices guaranteed on all products</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Fresh and authentic products daily</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
              <p className="text-gray-600">BOGO deals and free gifts available</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local & Convenient</h3>
              <p className="text-gray-600">Easy to reach in your neighborhood</p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Store</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Address</h3>
                    <p className="text-gray-600">Behind Bran School 17-18 Miles, Manali Distt Kullu HP</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Store Hours</h3>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-gray-600">8:00 AM - 09:00 PM</p>
                    <p className="text-sm text-green-600 mt-1">Open all days of the week!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2634.2369986830904!2d77.17540699999999!3d32.165072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDA5JzU0LjMiTiA3N8KwMTAnMzEuNSJF!5e1!3m2!1sen!2sin!4v1762146503256!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-green-100">We&apos;re here to help you with any questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:+91 62303 37333" className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-8 text-center transition-all group">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-green-100">+91 62303 37333</p>
            </a>

            <a href="https://wa.me/916230335333?text=Greetings!%20%F0%9F%91%8B%20%0AWhat%20would%20you%20like%20to%20order%20from%20Manali%20Mart%3F" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-8 text-center transition-all group">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-green-100">Chat with us</p>
            </a>

            <a href="mailto:info@manalimart.co.in" className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-lg p-8 text-center transition-all group">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-green-100">info@manalimart.co.in</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}