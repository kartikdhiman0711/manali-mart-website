"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Menu, 
  X, 
  Mountain,
  Filter,
  Star,
  Tag,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const categories = {
    'Dairy & Frozen': {
      subcategories: {
        'Milk & Milk Products': ['Toned Milk', 'Full Cream Milk', 'Flavored Milk', 'Milk Powder'],
        'Curd & Yogurt': ['Plain Curd', 'Greek Yogurt', 'Flavored Yogurt'],
        'Butter & Ghee': ['Salted Butter', 'Unsalted Butter', 'White Butter', 'Cow Ghee'],
        'Cheese': ['Slices', 'Cubes', 'Mozzarella', 'Processed Cheese'],
        'Paneer & Cream': ['Fresh Paneer', 'Malai', 'Fresh Cream', 'Whipping Cream'],
        'Lassi & Buttermilk': ['Sweet Lassi', 'Masala Chaas', 'Salted Chaas'],
        'Frozen Vegetables': ['Green Peas', 'Corn', 'Broccoli', 'Mixed Veg'],
        'Frozen Snacks': ['French Fries', 'Nuggets', 'Momos', 'Samosas', 'Spring Rolls'],
        'Ice Cream & Desserts': ['Cones', 'Cups', 'Family Packs', 'Kulfi']
      }
    },
    'Grocery & Daily Needs': {
      subcategories: {
        'Atta, Rice & Grains': ['Wheat Flour', 'Basmati Rice', 'Brown Rice', 'Pulses', 'Millets'],
        'Spices & Masalas': ['Whole Spices', 'Blended Spices', 'Masala Mixes'],
        'Oils & Ghee': ['Sunflower Oil', 'Mustard Oil', 'Olive Oil', 'Desi Ghee'],
        'Sugar & Salt': ['White Sugar', 'Brown Sugar', 'Jaggery', 'Rock Salt'],
        'Dry Fruits & Nuts': ['Almonds', 'Cashews', 'Raisins', 'Walnuts'],
        'Pickles & Chutneys': ['Mango Pickle', 'Mixed Pickle', 'Tomato Chutney'],
        'Tea & Coffee': ['Black Tea', 'Green Tea', 'Instant Coffee', 'Filter Coffee'],
        'Breakfast Cereals': ['Cornflakes', 'Oats', 'Muesli', 'Granola'],
        'Instant Food': ['Instant Noodles', 'Pasta', 'Soup Mixes'],
        'Baking & Desserts': ['Maida', 'Baking Powder', 'Cocoa Powder', 'Cake Mix']
      }
    },
    'Snacks & Drinks': {
      subcategories: {
        'Chips & Namkeen': ['Potato Chips', 'Banana Chips', 'Mixture', 'Sev'],
        'Biscuits & Cookies': ['Cream Biscuits', 'Digestive', 'Cookies'],
        'Chocolates & Candies': ['Dark Chocolate', 'Milk Chocolate', 'Toffees'],
        'Packaged Juices': ['Mango Juice', 'Orange Juice', 'Mixed Fruit'],
        'Soft Drinks & Soda': ['Cola', 'Lemon Drinks', 'Flavored Soda'],
        'Energy & Health Drinks': ['Protein Shakes', 'Malted Drinks', 'Sports Drinks'],
        'Packaged Water': ['Mineral Water', 'Sparkling Water']
      }
    },
    'Household Essentials': {
      subcategories: {
        'Cleaning Supplies': ['Floor Cleaner', 'Toilet Cleaner', 'Dish Wash', 'Glass Cleaner'],
        'Laundry Care': ['Detergent Powder', 'Liquid Detergent', 'Fabric Conditioner'],
        'Paper & Tissue Products': ['Kitchen Rolls', 'Toilet Paper', 'Napkins'],
        'Air Fresheners & Repellents': ['Room Fresheners', 'Mosquito Repellents'],
        'Storage & Disposables': ['Trash Bags', 'Ziplock Bags', 'Food Wraps']
      }
    },
    'Beauty & Personal Care': {
      subcategories: {
        'Skin Care': ['Face Wash', 'Moisturizers', 'Sunscreens', 'Scrubs'],
        'Hair Care': ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Color'],
        'Oral Care': ['Toothpaste', 'Mouthwash', 'Toothbrush'],
        'Bath & Body': ['Soap', 'Body Wash', 'Talc', 'Deodorants'],
        'Men\'s Grooming': ['Shaving Cream', 'Razors', 'Beard Oil'],
        'Women\'s Care': ['Sanitary Pads', 'Intimate Wash', 'Hair Removal']
      }
    },
    'Pet Food & Accessories': {
      subcategories: {
        'Dog Food': ['Dry Dog Food', 'Wet Dog Food', 'Dog Treats'],
        'Cat Food': ['Dry Cat Food', 'Wet Cat Food', 'Cat Treats'],
        'Pet Accessories': ['Collars', 'Leashes', 'Bowls', 'Beds'],
        'Pet Care': ['Shampoos', 'Grooming Brushes', 'Tick & Flea Solutions']
      }
    },
    'Kids Food & Accessories': {
      subcategories: {
        'Baby Food': ['Cereal Mixes', 'Formula Milk', 'Purees'],
        'Baby Snacks': ['Teething Biscuits', 'Healthy Snacks'],
        'Diapers & Wipes': ['Diaper Pants', 'Wet Wipes'],
        'Baby Skin Care': ['Baby Lotion', 'Baby Soap', 'Baby Shampoo'],
        'Feeding Accessories': ['Bottles', 'Sippers', 'Bowls', 'Bibs']
      }
    }
  };

  const sampleProducts = [
    {
      id: 'amul-toned-milk',
      name: 'Amul Toned Milk',
      price: '₹28/500ml',
      category: 'Dairy & Frozen',
      subcategory: 'Milk & Milk Products',
      image: 'https://images.pexels.com/photos/416832/pexels-photo-416832.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      description: 'Fresh toned milk with 3% fat content. Rich in calcium and protein.',
      brand: 'Amul',
      availability: 'In Stock'
    },
    {
      id: 'basmati-rice-premium',
      name: 'Basmati Rice Premium',
      price: '₹180/kg',
      category: 'Grocery & Daily Needs',
      subcategory: 'Atta, Rice & Grains',
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9,
      description: 'Long grain aromatic basmati rice. Perfect for biryanis and pulao.',
      brand: 'India Gate',
      availability: 'In Stock'
    },
    {
      id: 'lays-classic-chips',
      name: 'Lays Classic Chips',
      price: '₹20/pack',
      category: 'Snacks & Drinks',
      subcategory: 'Chips & Namkeen',
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.5,
      description: 'Crispy potato chips with classic salted taste. Perfect snack for any time.',
      brand: 'Lays',
      availability: 'In Stock'
    },
    {
      id: 'surf-excel-detergent',
      name: 'Surf Excel Detergent',
      price: '₹85/500g',
      category: 'Household Essentials',
      subcategory: 'Laundry Care',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      description: 'Powerful stain removal detergent powder. Removes tough stains easily.',
      brand: 'Surf Excel',
      availability: 'In Stock'
    },
    {
      id: 'himalaya-face-wash',
      name: 'Himalaya Face Wash',
      price: '₹65/100ml',
      category: 'Beauty & Personal Care',
      subcategory: 'Skin Care',
      image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6,
      description: 'Gentle face wash with neem and turmeric. Suitable for all skin types.',
      brand: 'Himalaya',
      availability: 'In Stock'
    },
    {
      id: 'pedigree-dog-food',
      name: 'Pedigree Dog Food',
      price: '₹320/1.2kg',
      category: 'Pet Food & Accessories',
      subcategory: 'Dog Food',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.4,
      description: 'Complete nutrition for adult dogs. With chicken and vegetables.',
      brand: 'Pedigree',
      availability: 'In Stock'
    },
    {
      id: 'cerelac-baby-food',
      name: 'Cerelac Baby Food',
      price: '₹185/300g',
      category: 'Kids Food & Accessories',
      subcategory: 'Baby Food',
      image: 'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8,
      description: 'Nutritious baby cereal with fruits. For babies 6 months and above.',
      brand: 'Nestle',
      availability: 'In Stock'
    },
    {
      id: 'mother-dairy-paneer',
      name: 'Mother Dairy Paneer',
      price: '₹90/200g',
      category: 'Dairy & Frozen',
      subcategory: 'Paneer & Cream',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7,
      description: 'Fresh cottage cheese made from pure milk. Rich in protein.',
      brand: 'Mother Dairy',
      availability: 'In Stock'
    }
  ];

  const filteredProducts = sampleProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-green-700" />
              <div>
                <h1 className="text-xl font-bold text-green-700">Manali Mart</h1>
                <p className="text-xs text-gray-500">Mountain Fresh</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Home</Link>
              <Link href="/products" className="text-green-700 font-medium border-b-2 border-green-700">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Contact</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Input 
                  placeholder="Search products..." 
                  className="w-64 pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-700">Home</Link>
              <Link href="/products" className="block px-3 py-2 text-green-700 font-medium">Products</Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-green-700">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-700">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === 'All' ? 'default' : 'ghost'}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory('All')}
                  >
                    All Products
                  </Button>
                  {Object.entries(categories).map(([category, data]) => (
                    <div key={category}>
                      <Button
                        variant={selectedCategory === category ? 'default' : 'ghost'}
                        className="w-full justify-between"
                        onClick={() => {
                          setSelectedCategory(category);
                          toggleCategoryExpansion(category);
                        }}
                      >
                        <span className="text-left">{category}</span>
                        {expandedCategories.includes(category) ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                        }
                      </Button>
                      {expandedCategories.includes(category) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {Object.keys(data.subcategories).map((subcategory) => (
                            <div key={subcategory} className="text-sm text-gray-600 py-1">
                              {subcategory}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} products found
              </p>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden mb-6">
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      {product.availability}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-blue-600">
                      {product.brand}
                    </Badge>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <Button className="w-full mt-3 bg-green-700 hover:bg-green-800">
                      View Details
                    </Button>
                  </Link>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {product.subcategory}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-700">{product.price}</span>
                      <Tag className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button 
                  className="mt-4" 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-bold">Manali Mart</h3>
                  <p className="text-sm text-gray-400">Mountain Fresh</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted neighborhood store in the heart of Manali, serving quality products since 2014.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dairy & Frozen</li>
                <li>Grocery & Daily Needs</li>
                <li>Snacks & Drinks</li>
                <li>Household Essentials</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mall Road, Old Manali</li>
                <li>+91 98765 43210</li>
                <li>info@manalimart.com</li>
                <li>7 AM - 10 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Manali Mart. All rights reserved. Made with ❤️ in the mountains.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}