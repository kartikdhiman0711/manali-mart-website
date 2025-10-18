// app/products/[id]/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, Package, Info, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Tag } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  subcategory: string;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  detailedDescription: string;
  brand: string;
  availability: string;
  weight: string;
  ingredients: string;
  nutritionalInfo: Record<string, string>;
  features: string[];
  storageInstructions: string;
  relatedProducts: string[];
}

const allProducts: Product[] = [
  // Include your products here, same as in your code
  {
    id: 'amul-toned-milk',
    name: 'Amul Toned Milk',
    price: '₹28/500ml',
    originalPrice: '₹32/500ml',
    category: 'Dairy & Frozen',
    subcategory: 'Milk & Milk Products',
    image: 'https://images.pexels.com/photos/416832/pexels-photo-416832.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    reviewCount: 245,
    description: 'Fresh toned milk with 3% fat content. Rich in calcium and protein, perfect for daily consumption.',
    detailedDescription: 'Amul Toned Milk is a premium quality milk product that undergoes strict quality checks to ensure freshness and nutritional value. With 3% fat content, it provides the perfect balance of taste and health. Rich in calcium, protein, and essential vitamins, this milk is ideal for growing children and health-conscious adults.',
    brand: 'Amul',
    availability: 'In Stock',
    weight: '500ml',
    ingredients: 'Fresh Cow Milk, Standardized Fat Content',
    nutritionalInfo: {
      'Energy': '60 kcal per 100ml',
      'Protein': '3.2g per 100ml',
      'Fat': '3.0g per 100ml',
      'Carbohydrates': '4.7g per 100ml',
      'Calcium': '120mg per 100ml'
    },
    features: [
      'Rich in Calcium and Protein',
      'Fresh and Pure',
      '3% Fat Content',
      'Pasteurized and Homogenized',
      'No Added Preservatives'
    ],
    storageInstructions: 'Store in refrigerator at 4°C or below. Consume within 2 days of opening.',
    relatedProducts: ['mother-dairy-paneer', 'amul-butter', 'amul-curd']
  }, { id: 'basmati-rice-premium', name: 'Basmati Rice Premium', price: '₹180/kg', originalPrice: '₹200/kg', category: 'Grocery & Daily Needs', subcategory: 'Atta, Rice & Grains', image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.9, reviewCount: 189, description: 'Long grain aromatic basmati rice. Perfect for biryanis and pulao.', detailedDescription: 'Premium quality basmati rice with extra-long grains and distinctive aroma. Aged for perfect texture and taste, this rice is ideal for special occasions and everyday meals. Each grain cooks to perfection, remaining separate and fluffy.', brand: 'India Gate', availability: 'In Stock', weight: '1kg', ingredients: '100% Pure Basmati Rice', nutritionalInfo: { 'Energy': '345 kcal per 100g', 'Protein': '7.1g per 100g', 'Fat': '0.7g per 100g', 'Carbohydrates': '78g per 100g', 'Fiber': '1.3g per 100g' }, features: [ 'Extra Long Grain', 'Aromatic and Flavorful', 'Aged Rice', 'Cooks Fluffy and Separate', 'Premium Quality' ], storageInstructions: 'Store in a cool, dry place in an airtight container. Keep away from moisture.', relatedProducts: ['toor-dal', 'basmati-rice-classic', 'jeera-rice'] }, { id: 'lays-classic-chips', name: 'Lays Classic Chips', price: '₹20/pack', originalPrice: '₹25/pack', category: 'Snacks & Drinks', subcategory: 'Chips & Namkeen', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.5, reviewCount: 312, description: 'Crispy potato chips with classic salted taste. Perfect snack for any time.', detailedDescription: 'Made from carefully selected potatoes, Lays Classic Chips offer the perfect crunch with every bite. Lightly salted to enhance the natural potato flavor, these chips are perfect for sharing with friends or enjoying as a solo snack.', brand: 'Lays', availability: 'In Stock', weight: '52g', ingredients: 'Potatoes, Vegetable Oil, Salt', nutritionalInfo: { 'Energy': '536 kcal per 100g', 'Protein': '6.6g per 100g', 'Fat': '33.8g per 100g', 'Carbohydrates': '53.3g per 100g', 'Sodium': '647mg per 100g' }, features: [ 'Made from Real Potatoes', 'Crispy and Crunchy', 'Classic Salted Flavor', 'Perfect for Sharing', 'No Artificial Colors' ], storageInstructions: 'Store in a cool, dry place. Consume immediately after opening for best taste.', relatedProducts: ['kurkure-masala', 'haldirams-mixture', 'bingo-chips'] }, { id: 'surf-excel-detergent', name: 'Surf Excel Detergent', price: '₹85/500g', originalPrice: '₹95/500g', category: 'Household Essentials', subcategory: 'Laundry Care', image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.7, reviewCount: 156, description: 'Powerful stain removal detergent powder. Removes tough stains easily.', detailedDescription: 'Surf Excel Detergent Powder is formulated with advanced stain removal technology that penetrates deep into fabric fibers to remove the toughest stains. Gentle on clothes but tough on stains, it keeps your clothes looking bright and fresh.', brand: 'Surf Excel', availability: 'In Stock', weight: '500g', ingredients: 'Sodium Carbonate, Linear Alkylbenzene Sulphonate, Sodium Sulphate, Optical Brightener', nutritionalInfo: {}, features: [ 'Advanced Stain Removal', 'Gentle on Fabrics', 'Brightens Colors', 'Fresh Fragrance', 'Suitable for All Fabrics' ], storageInstructions: 'Store in a cool, dry place. Keep away from children. Avoid contact with eyes.', relatedProducts: ['ariel-detergent', 'tide-powder', 'comfort-fabric-softener'] }, { id: 'himalaya-face-wash', name: 'Himalaya Face Wash', price: '₹65/100ml', originalPrice: '₹75/100ml', category: 'Beauty & Personal Care', subcategory: 'Skin Care', image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.6, reviewCount: 203, description: 'Gentle face wash with neem and turmeric. Suitable for all skin types.', detailedDescription: 'Himalaya Purifying Neem Face Wash combines the goodness of Neem and Turmeric to gently remove impurities and prevent pimples. The natural ingredients help maintain skin\'s natural moisture balance while providing deep cleansing.', brand: 'Himalaya', availability: 'In Stock', weight: '100ml', ingredients: 'Neem Extract, Turmeric Extract, Aqua, Sodium Lauryl Sulphate', nutritionalInfo: {}, features: [ 'Contains Natural Neem', 'Turmeric for Glow', 'Prevents Pimples', 'Gentle Cleansing', 'Suitable for All Skin Types' ], storageInstructions: 'Store in a cool, dry place. For external use only. Avoid contact with eyes.', relatedProducts: ['himalaya-moisturizer', 'patanjali-face-wash', 'nivea-face-wash'] }, { id: 'pedigree-dog-food', name: 'Pedigree Dog Food', price: '₹320/1.2kg', originalPrice: '₹350/1.2kg', category: 'Pet Food & Accessories', subcategory: 'Dog Food', image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.4, reviewCount: 89, description: 'Complete nutrition for adult dogs. With chicken and vegetables.', detailedDescription: 'Pedigree Adult Dog Food provides complete and balanced nutrition for adult dogs. Made with real chicken and vegetables, it contains essential nutrients, vitamins, and minerals to keep your dog healthy and active.', brand: 'Pedigree', availability: 'In Stock', weight: '1.2kg', ingredients: 'Chicken, Rice, Corn, Vegetables, Vitamins, Minerals', nutritionalInfo: { 'Protein': 'Min 18%', 'Fat': 'Min 8%', 'Fiber': 'Max 4%', 'Moisture': 'Max 12%' }, features: [ 'Complete Nutrition', 'Real Chicken', 'Added Vegetables', 'Essential Vitamins', 'Supports Healthy Digestion' ], storageInstructions: 'Store in a cool, dry place. Seal properly after opening. Use within 30 days of opening.', relatedProducts: ['drools-dog-food', 'royal-canin', 'whiskas-cat-food'] }, { id: 'cerelac-baby-food', name: 'Cerelac Baby Food', price: '₹185/300g', originalPrice: '₹200/300g', category: 'Kids Food & Accessories', subcategory: 'Baby Food', image: 'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.8, reviewCount: 167, description: 'Nutritious baby cereal with fruits. For babies 6 months and above.', detailedDescription: 'Nestle Cerelac is a nutritious baby cereal fortified with iron and other essential nutrients. Made with wholesome grains and real fruits, it provides the right nutrition for your baby\'s healthy growth and development.', brand: 'Nestle', availability: 'In Stock', weight: '300g', ingredients: 'Wheat Flour, Milk Powder, Fruit Powder, Vitamins, Minerals, Iron', nutritionalInfo: { 'Energy': '414 kcal per 100g', 'Protein': '15.6g per 100g', 'Fat': '8.8g per 100g', 'Iron': '9.6mg per 100g' }, features: [ 'Fortified with Iron', 'Contains Real Fruits', 'Easy to Digest', 'No Added Preservatives', 'Supports Brain Development' ], storageInstructions: 'Store in a cool, dry place. Use within 3 weeks of opening. Always use a clean, dry spoon.', relatedProducts: ['farex-baby-food', 'gerber-cereal', 'baby-formula'] }, { id: 'mother-dairy-paneer', name: 'Mother Dairy Paneer', price: '₹90/200g', originalPrice: '₹100/200g', category: 'Dairy & Frozen', subcategory: 'Paneer & Cream', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600', rating: 4.7, reviewCount: 134, description: 'Fresh cottage cheese made from pure milk. Rich in protein.', detailedDescription: 'Mother Dairy Fresh Paneer is made from pure, fresh milk using traditional methods. Rich in protein and calcium, this soft and fresh paneer is perfect for making delicious Indian dishes like paneer butter masala, palak paneer, and more.', brand: 'Mother Dairy', availability: 'In Stock', weight: '200g', ingredients: 'Fresh Milk, Citric Acid', nutritionalInfo: { 'Energy': '265 kcal per 100g', 'Protein': '18.3g per 100g', 'Fat': '20.8g per 100g', 'Calcium': '208mg per 100g' }, features: [ 'Made from Pure Milk', 'High Protein Content', 'Fresh and Soft', 'Rich in Calcium', 'No Preservatives' ], storageInstructions: 'Keep refrigerated at 4°C or below. Consume within 2-3 days of opening.', relatedProducts: ['amul-paneer', 'fresh-cream', 'mozzarella-cheese'] }
  // Add all other products from your previous code
];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id
  }));
}

export default async function SingleProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = allProducts.find(p => p.id === id) || null;
  const similarProducts = product
    ? allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  if (!product) return <ProductNotFound />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-green-700">Products</Link>
            <span>/</span>
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-green-700">
              {product.category}
            </Link>
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
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 right-4 bg-green-600">
                {product.availability}
              </Badge>
              {product.originalPrice && (
                <Badge className="absolute top-4 left-4 bg-red-600">
                  SALE
                </Badge>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.subcategory}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">{product.rating}</span>
                  <span className="text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <Badge className="bg-blue-600">{product.brand}</Badge>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-green-700">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.detailedDescription}</p>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Info Cards */}
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
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brand:</span>
                      <span className="font-medium">{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight/Size:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{product.subcategory}</span>
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
                    <span className="text-green-700 font-medium">{product.availability}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Visit our store to purchase this product
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Nutritional Information */}
          {Object.keys(product.nutritionalInfo).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Nutritional Information</CardTitle>
                <CardDescription>Per 100g/100ml serving</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Storage Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Storage & Usage</CardTitle>
              <CardDescription>Important information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
                  <p className="text-sm text-gray-600">{product.ingredients}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Storage Instructions</h4>
                  <p className="text-sm text-gray-600">{product.storageInstructions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarProducts.map((similarProduct) => (
                <Card key={similarProduct.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={similarProduct.image} 
                      alt={similarProduct.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      {similarProduct.availability}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-blue-600">
                      {similarProduct.brand}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{similarProduct.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{similarProduct.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {similarProduct.subcategory}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-3">{similarProduct.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-green-700">{similarProduct.price}</span>
                      <Tag className="h-5 w-5 text-gray-400" />
                    </div>
                    <Link href={`/products/${similarProduct.id}`}>
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        View Details
                      </Button>
                    </Link>
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

// -------------------- Helper Components --------------------

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, the product you're looking for doesn't exist or may have been removed.
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
  );
}
