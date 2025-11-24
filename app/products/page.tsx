"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronRight, Star, Tag, Grid3x3, List, Search } from 'lucide-react';
import Link from 'next/link';
import FloatingSocialIcons from '@/components/FloatingSocialIcons';

interface Category {
  id: string;
  name: string;
  image?: string;
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
  // rating?: number;
  // reviewCount?: number;
  brand?: string;
  // availability?: string;
  scheme?: string; 
}

export default function Products() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Fetch categories and products from backend
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

  // Flatten all products for filtering
  const allProducts = categories.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.categoryId === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || product.subcategoryId === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(c => c !== categoryId);
      } else {
        return [categoryId];
      }
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    if (!expandedCategories.includes(categoryId)) {
      toggleCategoryExpansion(categoryId);
    }
  };

  const handleSubcategorySelect = (subcategoryId: string, categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchTerm('');
    setExpandedCategories([]);
  };

  const getPageTitle = () => {
    if (selectedSubcategory) {
      const subcategory = categories
        .flatMap(c => c.subcategories)
        .find(s => s.id === selectedSubcategory);
      return subcategory?.name || 'Products';
    }
    if (selectedCategory) {
      const category = categories.find(c => c.id === selectedCategory);
      return category?.name || 'Products';
    }
    return 'All Products';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-green-700 hover:bg-green-800">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <FloatingSocialIcons />
    
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-row gap-1 sm:gap-4 lg:gap-6">
          {/* Left Sidebar - Categories */}
          <div className="w-20 sm:w-32 lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border sticky top-2 h-fit">
              <div className="p-2 py-6 border-b">
                <h2 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-900">Categories</h2>
              </div>
              
              {/* All Products Button */}
              <div className="border-b border-gray-100">
                <button
                  onClick={clearFilters}
                  className={`w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                    !selectedCategory && !selectedSubcategory ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-xs sm:text-sm">All</span>
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-xs sm:text-sm text-center sm:text-left">All Products</div>
                      <div className="text-xs text-gray-500 hidden lg:block">View everything</div>
                    </div>
                  </div>
                </button>
              </div>
              
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto overflow-x-hidden">
                {categories.map((category) => (
                  <div key={category.id} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => handleCategorySelect(category.id)}
                      className={`w-full px-3 sm:px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        selectedCategory === category.id ? 'bg-green-50 text-green-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 flex-1 min-w-0">
                        {category.image ? (
                          <img 
                            src={category.image} 
                            alt={category.name}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <Tag className="h-3 w-3 text-gray-500" />
                          </div>
                        )}
                        <div className="text-center sm:text-left flex-1 min-w-0">
                          <div className="font-medium text-xs sm:text-sm text-gray-900 leading-tight break-words">{category.name}</div>
                          {category.itemCount && (
                            <div className="text-xs text-gray-500 hidden lg:block">{category.itemCount}</div>
                          )}
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        {expandedCategories.includes(category.id) ? 
                          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" /> : 
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        }
                      </div>
                    </button>
                    
                    {expandedCategories.includes(category.id) && (
                      <div className="bg-gray-50">
                        {category.subcategories.map((subcategory) => (
                          <button
                            key={subcategory.id}
                            onClick={() => handleSubcategorySelect(subcategory.id, category.id)}
                            className={`w-full px-2 sm:px-8 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 transition-colors ${
                              selectedSubcategory === subcategory.id ? 'bg-green-100 text-green-700 font-medium' : 'text-gray-600'
                            }`}
                          >
                            <span className="block text-gray-900 break-words leading-tight">{subcategory.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 mb-1">
              {/* Mobile Search Bar */}
              <div className="block sm:hidden mb-4">
                <div className="relative">
                  <Input 
                    placeholder="Search products..." 
                    className="w-full pr-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {filteredProducts.length} products found
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-1 sm:gap-4 ${
              viewMode === 'grid' 
                ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className={`group hover:shadow-lg transition-all duration-300 overflow-hidden flex ${
                  viewMode === 'list' ? 'flex-col sm:flex-row' : 'flex-col h-full'
                }`}>
                  <div className={`relative flex-shrink-0 ${
                    viewMode === 'list' 
                      ? 'w-full h-24 sm:w-24 sm:h-24 lg:w-32 lg:h-full' 
                      : ''
                  }`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`object-cover ${
                        viewMode === 'list' 
                          ? 'w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none' 
                          : 'w-full h-24 sm:h-32 lg:h-40 rounded-t-lg'
                      }`}
                    />
                    {/* <Badge className="absolute top-1 right-1 bg-green-600 text-xs px-1 py-0.5">
                      {product.availability || 'In Stock'}
                    </Badge> */}
                    {(product.scheme) && (
                      <Badge className="absolute top-1 left-1 bg-green-600 text-xs px-1 py-0.5">
                        {product.scheme}
                      </Badge>
                    )}
                    {/* {(product.originalPrice || product.scheme) && (
                      <Badge className="absolute top-1 left-1 bg-red-600 text-xs px-1 py-0.5">
                        {product.scheme || 'SALE'}
                      </Badge>
                    )} */}
                  </div>
                  
                  <div className={`flex flex-col flex-grow ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <CardHeader className={`flex-shrink-0 ${viewMode === 'list' ? 'pb-1 px-1 pt-2' : 'pb-1 px-1 pt-2'}`}>
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        {product.brand && (
                          <Badge variant="secondary" className="text-xs text-primary-foreground hover:bg-primary/80 bg-blue-600 px-1 py-0.5">
                            {product.brand}
                          </Badge>
                        )}
                        {/* {product.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{product.rating}</span>
                          </div>
                        )} */}
                      </div>
                      <CardTitle className={`leading-tight ${
                        viewMode === 'list' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
                      }`}>
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-gray-500 truncate">
                        {categories.flatMap(c => c.subcategories).find(s => s.id === product.subcategoryId)?.name || 'Product'}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className={`flex flex-col flex-grow ${viewMode === 'list' ? 'pt-0 px-1 pb-2' : 'pt-0 px-1 pb-2'}`}>
                      <p className={`text-gray-600 mb-2 line-clamp-2 flex-grow ${
                        viewMode === 'list' ? 'text-xs' : 'text-xs'
                      }`}>
                        {product.description || 'No description available'}
                      </p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-2">
                            <span className={`font-bold text-green-700 ${
                              viewMode === 'list' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
                            }`}>
                              ₹{product.price}
                            </span>
                            {product.originalPrice && (
                              <span className={`text-gray-500 line-through ${
                                viewMode === 'list' ? 'text-xs' : 'text-xs'
                              }`}>
                                ₹{product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Tag className="h-3 w-3 text-gray-400" />
                        </div>
                        
                        <Link href={`/products/${product.id}`}>
                          <Button className="w-full bg-green-700 hover:bg-green-800 text-xs py-1.5">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Tag className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  No products match your current filters. Try adjusting your search or category selection.
                </p>
                <Button onClick={clearFilters} className="bg-green-700 hover:bg-green-800">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}