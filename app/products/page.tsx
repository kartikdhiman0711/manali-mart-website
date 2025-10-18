"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronRight, Star, Tag, Grid3x3 as Grid3X3, List, Search } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/lib/categories';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const sampleProducts = [
    {
      id: 'amul-toned-milk',
      name: 'Amul Toned Milk',
      price: '₹28/500ml',
      originalPrice: '₹32/500ml',
      category: 'Dairy & Frozen',
      subcategory: 'Milk & Milk Products',
      image: 'https://images.pexels.com/photos/416832/pexels-photo-416832.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      reviewCount: 245,
      description: 'Fresh toned milk with 3% fat content. Rich in calcium and protein.',
      brand: 'Amul',
      availability: 'In Stock'
    },
    {
      id: 'basmati-rice-premium',
      name: 'Basmati Rice Premium',
      price: '₹180/kg',
      originalPrice: '₹200/kg',
      category: 'Grocery & Daily Needs',
      subcategory: 'Atta, Rice & Grains',
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      reviewCount: 189,
      description: 'Long grain aromatic basmati rice. Perfect for biryanis and pulao.',
      brand: 'India Gate',
      availability: 'In Stock'
    },
    {
      id: 'lays-classic-chips',
      name: 'Lays Classic Chips',
      price: '₹20/pack',
      originalPrice: '₹25/pack',
      category: 'Snacks & Drinks',
      subcategory: 'Chips & Namkeen',
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.5,
      reviewCount: 312,
      description: 'Crispy potato chips with classic salted taste. Perfect snack for any time.',
      brand: 'Lays',
      availability: 'In Stock'
    },
    {
      id: 'surf-excel-detergent',
      name: 'Surf Excel Detergent',
      price: '₹85/500g',
      originalPrice: '₹95/500g',
      category: 'Household Essentials',
      subcategory: 'Laundry Care',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      reviewCount: 156,
      description: 'Powerful stain removal detergent powder. Removes tough stains easily.',
      brand: 'Surf Excel',
      availability: 'In Stock'
    },
    {
      id: 'himalaya-face-wash',
      name: 'Himalaya Face Wash',
      price: '₹65/100ml',
      originalPrice: '₹75/100ml',
      category: 'Beauty & Personal Care',
      subcategory: 'Skin Care',
      image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6,
      reviewCount: 203,
      description: 'Gentle face wash with neem and turmeric. Suitable for all skin types.',
      brand: 'Himalaya',
      availability: 'In Stock'
    },
    {
      id: 'pedigree-dog-food',
      name: 'Pedigree Dog Food',
      price: '₹320/1.2kg',
      originalPrice: '₹350/1.2kg',
      category: 'Pet Food & Accessories',
      subcategory: 'Dog Food',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.4,
      reviewCount: 89,
      description: 'Complete nutrition for adult dogs. With chicken and vegetables.',
      brand: 'Pedigree',
      availability: 'In Stock'
    },
    {
      id: 'cerelac-baby-food',
      name: 'Cerelac Baby Food',
      price: '₹185/300g',
      originalPrice: '₹200/300g',
      category: 'Kids Food & Accessories',
      subcategory: 'Baby Food',
      image: 'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      reviewCount: 167,
      description: 'Nutritious baby cereal with fruits. For babies 6 months and above.',
      brand: 'Nestle',
      availability: 'In Stock'
    },
    {
      id: 'mother-dairy-paneer',
      name: 'Mother Dairy Paneer',
      price: '₹90/200g',
      originalPrice: '₹100/200g',
      category: 'Dairy & Frozen',
      subcategory: 'Paneer & Cream',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      reviewCount: 134,
      description: 'Fresh cottage cheese made from pure milk. Rich in protein.',
      brand: 'Mother Dairy',
      availability: 'In Stock'
    }
  ];

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const toggleCategoryExpansion = (categoryName: string) => {
    setExpandedCategories(prev => {
      if (prev.includes(categoryName)) {
        // If category is already open, close it
        return prev.filter(c => c !== categoryName);
      } else {
        // Close all other categories and open this one
        return [categoryName];
      }
    });
  };

  const handleCategorySelect = (categoryName: string) => {
    // Prevent page scroll when selecting category
    event?.preventDefault();
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null);
    if (!expandedCategories.includes(categoryName)) {
      toggleCategoryExpansion(categoryName);
    }
  };

  const handleSubcategorySelect = (subcategoryName: string) => {
    // Prevent page scroll when selecting subcategory
    event?.preventDefault();
    setSelectedSubcategory(subcategoryName);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchTerm('');
    setExpandedCategories([]);
  };

  const getPageTitle = () => {
    if (selectedSubcategory) return selectedSubcategory;
    if (selectedCategory) return selectedCategory;
    return 'All Products';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

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
                  <div key={category.name} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => handleCategorySelect(category.name)}
                      className={`w-full px-3 sm:px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                        selectedCategory === category.name ? 'bg-green-50 text-green-700' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 flex-1 min-w-0">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-6 h-6 sm:w-8 sm:h-8 rounded object-cover flex-shrink-0"
                        />
                        <div className="text-center sm:text-left flex-1 min-w-0">
                          <div className="font-medium text-xs sm:text-sm text-gray-900 leading-tight break-words">{category.name}</div>
                          <div className="text-xs text-gray-500 hidden lg:block">{category.itemCount}</div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        {expandedCategories.includes(category.name) ? 
                          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" /> : 
                          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        }
                      </div>
                    </button>
                    
                    {expandedCategories.includes(category.name) && (
                      <div className="bg-gray-50">
                        {category.subcategories.map((subcategory) => (
                          <button
                            key={subcategory.name}
                            onClick={() => handleSubcategorySelect(subcategory.name)}
                            className={`w-full px-2 sm:px-8 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 transition-colors ${
                              selectedSubcategory === subcategory.name ? 'bg-green-100 text-green-700 font-medium' : 'text-gray-600'
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
                    {selectedCategory && ` in ${selectedCategory}`}
                    {selectedSubcategory && ` > ${selectedSubcategory}`}
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="h-4 w-4" />
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
                  <Card key={product.id} className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
                  }`}>
                    <div className={`relative ${
                      viewMode === 'list' 
                        ? 'w-full h-24 sm:w-24 sm:h-24 lg:w-32 lg:h-full flex-shrink-0' 
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
                      <Badge className="absolute top-1 right-1 bg-green-600 text-xs px-1 py-0.5">
                        {product.availability}
                      </Badge>
                      {product.originalPrice && (
                        <Badge className="absolute top-1 left-1 bg-red-600 text-xs px-1 py-0.5">
                          SALE
                        </Badge>
                      )}
                    </div>
                    
                    <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <CardHeader className={`${viewMode === 'list' ? 'pb-1 px-1 pt-2' : 'pb-1 px-1 pt-2'}`}>
                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <Badge variant="secondary" className="text-xs px-1 py-0.5">
                            {product.brand}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{product.rating}</span>
                          </div>
                        </div>
                        <CardTitle className={`leading-tight ${
                          viewMode === 'list' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
                        }`}>
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-xs text-gray-500 truncate">
                          {product.subcategory}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className={`${viewMode === 'list' ? 'pt-0 px-1 pb-2' : 'pt-0 px-1 pb-2'}`}>
                        <p className={`text-gray-600 mb-2 line-clamp-2 ${
                          viewMode === 'list' ? 'text-xs' : 'text-xs'
                        }`}>
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
                            <span className={`font-bold text-green-700 ${
                              viewMode === 'list' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
                            }`}>
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className={`text-gray-500 line-through ${
                                viewMode === 'list' ? 'text-xs' : 'text-xs'
                              }`}>
                                {product.originalPrice}
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