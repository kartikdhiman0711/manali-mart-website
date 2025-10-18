import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allProducts = [
  {
    id: "basmati-rice-premium",
    name: "Basmati Rice Premium",
    price: "₹180/kg",
    originalPrice: "₹200/kg",
    category: "Grocery & Daily Needs",
    subcategory: "Atta, Rice & Grains",
    image:
      "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Long grain aromatic basmati rice. Perfect for biryanis and pulao.",
    detailedDescription:
      "Premium quality basmati rice with extra-long grains and distinctive aroma. Aged for perfect texture and taste, this rice is ideal for special occasions and everyday meals. Each grain cooks to perfection, remaining separate and fluffy.",
    brand: "India Gate",
    weight: "1kg",
    ingredients: "100% Pure Basmati Rice",
  },
  {
    id: "lays-classic-chips",
    name: "Lays Classic Chips",
    price: "₹20/pack",
    originalPrice: "₹25/pack",
    category: "Snacks & Drinks",
    subcategory: "Chips & Namkeen",
    image:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Crispy potato chips with classic salted taste. Perfect snack for any time.",
    detailedDescription:
      "Made from carefully selected potatoes, Lays Classic Chips offer the perfect crunch with every bite. Lightly salted to enhance the natural potato flavor, these chips are perfect for sharing with friends or enjoying as a solo snack.",
    brand: "Lays",
    weight: "52g",
    ingredients: "Potatoes, Vegetable Oil, Salt",
  },
  {
    id: "surf-excel-detergent",
    name: "Surf Excel Detergent",
    price: "₹85/500g",
    originalPrice: "₹95/500g",
    category: "Household Essentials",
    subcategory: "Laundry Care",
    image:
      "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Powerful stain removal detergent powder. Removes tough stains easily.",
    detailedDescription:
      "Surf Excel Detergent Powder is formulated with advanced stain removal technology that penetrates deep into fabric fibers to remove the toughest stains. Gentle on clothes but tough on stains, it keeps your clothes looking bright and fresh.",
    brand: "Surf Excel",
    weight: "500g",
    ingredients:
      "Sodium Carbonate, Linear Alkylbenzene Sulphonate, Sodium Sulphate, Optical Brightener",
  },
  {
    id: "himalaya-face-wash",
    name: "Himalaya Face Wash",
    price: "₹65/100ml",
    originalPrice: "₹75/100ml",
    category: "Beauty & Personal Care",
    subcategory: "Skin Care",
    image:
      "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Gentle face wash with neem and turmeric. Suitable for all skin types.",
    detailedDescription:
      "Himalaya Purifying Neem Face Wash combines the goodness of Neem and Turmeric to gently remove impurities and prevent pimples. The natural ingredients help maintain skin's natural moisture balance while providing deep cleansing.",
    brand: "Himalaya",
    weight: "100ml",
    ingredients: "Neem Extract, Turmeric Extract, Aqua, Sodium Lauryl Sulphate",
  },
  {
    id: "pedigree-dog-food",
    name: "Pedigree Dog Food",
    price: "₹320/1.2kg",
    originalPrice: "₹350/1.2kg",
    category: "Pet Food & Accessories",
    subcategory: "Dog Food",
    image:
      "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Complete nutrition for adult dogs. With chicken and vegetables.",
    detailedDescription:
      "Pedigree Adult Dog Food provides complete and balanced nutrition for adult dogs. Made with real chicken and vegetables, it contains essential nutrients, vitamins, and minerals to keep your dog healthy and active.",
    brand: "Pedigree",
    weight: "1.2kg",
    ingredients: "Chicken, Rice, Corn, Vegetables, Vitamins, Minerals",
  },
  {
    id: "cerelac-baby-food",
    name: "Cerelac Baby Food",
    price: "₹185/300g",
    originalPrice: "₹200/300g",
    category: "Kids Food & Accessories",
    subcategory: "Baby Food",
    image:
      "https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Nutritious baby cereal with fruits. For babies 6 months and above.",
    detailedDescription:
      "Nestle Cerelac is a nutritious baby cereal fortified with iron and other essential nutrients. Made with wholesome grains and real fruits, it provides the right nutrition for your baby's healthy growth and development.",
    brand: "Nestle",
    weight: "300g",
    ingredients:
      "Wheat Flour, Milk Powder, Fruit Powder, Vitamins, Minerals, Iron",
  },
  {
    id: "mother-dairy-paneer",
    name: "Mother Dairy Paneer",
    price: "₹90/200g",
    originalPrice: "₹100/200g",
    category: "Dairy & Frozen",
    subcategory: "Paneer & Cream",
    image:
      "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Fresh cottage cheese made from pure milk. Rich in protein.",
    detailedDescription:
      "Mother Dairy Fresh Paneer is made from pure, fresh milk using traditional methods. Rich in protein and calcium, this soft and fresh paneer is perfect for making delicious Indian dishes like paneer butter masala, palak paneer, and more.",
    brand: "Mother Dairy",
    weight: "200g",
    ingredients: "Fresh Milk, Citric Acid",
  },
  // Add other products here
];
async function main() {
    // Clear existing products first (safe for initial seeding)
    await prisma.product.deleteMany({});
    
    // Insert all products in one batch operation
    await prisma.product.createMany({
      data: allProducts,
    });
    console.log(`Inserted ${allProducts.length} products!`);
  }
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
