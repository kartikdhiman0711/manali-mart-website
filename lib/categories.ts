export interface SubCategory {
  name: string;
  items: string[];
}

export interface Category {
  name: string;
  image: string;
  description: string;
  itemCount: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    name: 'Dairy & Frozen',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Fresh dairy products and frozen foods',
    itemCount: '150+ items',
    subcategories: [
      {
        name: 'Milk & Milk Products',
        items: ['Toned Milk', 'Full Cream Milk', 'Flavored Milk', 'Milk Powder']
      },
      {
        name: 'Curd & Yogurt',
        items: ['Plain Curd', 'Greek Yogurt', 'Flavored Yogurt']
      },
      {
        name: 'Butter & Ghee',
        items: ['Salted Butter', 'Unsalted Butter', 'White Butter', 'Cow Ghee']
      },
      {
        name: 'Cheese',
        items: ['Slices', 'Cubes', 'Mozzarella', 'Processed Cheese']
      },
      {
        name: 'Paneer & Cream',
        items: ['Fresh Paneer', 'Malai', 'Fresh Cream', 'Whipping Cream']
      },
      {
        name: 'Lassi & Buttermilk',
        items: ['Sweet Lassi', 'Masala Chaas', 'Salted Chaas']
      },
      {
        name: 'Frozen Vegetables',
        items: ['Green Peas', 'Corn', 'Broccoli', 'Mixed Veg']
      },
      {
        name: 'Frozen Snacks',
        items: ['French Fries', 'Nuggets', 'Momos', 'Samosas', 'Spring Rolls']
      },
      {
        name: 'Ice Cream & Desserts',
        items: ['Cones', 'Cups', 'Family Packs', 'Kulfi']
      }
    ]
  },
  {
    name: 'Grocery & Daily Needs',
    image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Essential groceries and daily necessities',
    itemCount: '300+ items',
    subcategories: [
      {
        name: 'Atta, Rice & Grains',
        items: ['Wheat Flour', 'Basmati Rice', 'Brown Rice', 'Pulses', 'Millets']
      },
      {
        name: 'Spices & Masalas',
        items: ['Whole Spices', 'Blended Spices', 'Masala Mixes']
      },
      {
        name: 'Oils & Ghee',
        items: ['Sunflower Oil', 'Mustard Oil', 'Olive Oil', 'Desi Ghee']
      },
      {
        name: 'Sugar & Salt',
        items: ['White Sugar', 'Brown Sugar', 'Jaggery', 'Rock Salt']
      },
      {
        name: 'Dry Fruits & Nuts',
        items: ['Almonds', 'Cashews', 'Raisins', 'Walnuts']
      },
      {
        name: 'Pickles & Chutneys',
        items: ['Mango Pickle', 'Mixed Pickle', 'Tomato Chutney']
      },
      {
        name: 'Tea & Coffee',
        items: ['Black Tea', 'Green Tea', 'Instant Coffee', 'Filter Coffee']
      },
      {
        name: 'Breakfast Cereals',
        items: ['Cornflakes', 'Oats', 'Muesli', 'Granola']
      },
      {
        name: 'Instant Food',
        items: ['Instant Noodles', 'Pasta', 'Soup Mixes']
      },
      {
        name: 'Baking & Desserts',
        items: ['Maida', 'Baking Powder', 'Cocoa Powder', 'Cake Mix']
      }
    ]
  },
  {
    name: 'Snacks & Drinks',
    image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Delicious snacks and refreshing beverages',
    itemCount: '200+ items',
    subcategories: [
      {
        name: 'Chips & Namkeen',
        items: ['Potato Chips', 'Banana Chips', 'Mixture', 'Sev']
      },
      {
        name: 'Biscuits & Cookies',
        items: ['Cream Biscuits', 'Digestive', 'Cookies']
      },
      {
        name: 'Chocolates & Candies',
        items: ['Dark Chocolate', 'Milk Chocolate', 'Toffees']
      },
      {
        name: 'Packaged Juices',
        items: ['Mango Juice', 'Orange Juice', 'Mixed Fruit']
      },
      {
        name: 'Soft Drinks & Soda',
        items: ['Cola', 'Lemon Drinks', 'Flavored Soda']
      },
      {
        name: 'Energy & Health Drinks',
        items: ['Protein Shakes', 'Malted Drinks', 'Sports Drinks']
      },
      {
        name: 'Packaged Water',
        items: ['Mineral Water', 'Sparkling Water']
      }
    ]
  },
  {
    name: 'Household Essentials',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Cleaning supplies and household items',
    itemCount: '180+ items',
    subcategories: [
      {
        name: 'Cleaning Supplies',
        items: ['Floor Cleaner', 'Toilet Cleaner', 'Dish Wash', 'Glass Cleaner']
      },
      {
        name: 'Laundry Care',
        items: ['Detergent Powder', 'Liquid Detergent', 'Fabric Conditioner']
      },
      {
        name: 'Paper & Tissue Products',
        items: ['Kitchen Rolls', 'Toilet Paper', 'Napkins']
      },
      {
        name: 'Air Fresheners & Repellents',
        items: ['Room Fresheners', 'Mosquito Repellents']
      },
      {
        name: 'Storage & Disposables',
        items: ['Trash Bags', 'Ziplock Bags', 'Food Wraps']
      }
    ]
  },
  {
    name: 'Beauty & Personal Care',
    image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Personal care and beauty products',
    itemCount: '250+ items',
    subcategories: [
      {
        name: 'Skin Care',
        items: ['Face Wash', 'Moisturizers', 'Sunscreens', 'Scrubs']
      },
      {
        name: 'Hair Care',
        items: ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Color']
      },
      {
        name: 'Oral Care',
        items: ['Toothpaste', 'Mouthwash', 'Toothbrush']
      },
      {
        name: 'Bath & Body',
        items: ['Soap', 'Body Wash', 'Talc', 'Deodorants']
      },
      {
        name: 'Men\'s Grooming',
        items: ['Shaving Cream', 'Razors', 'Beard Oil']
      },
      {
        name: 'Women\'s Care',
        items: ['Sanitary Pads', 'Intimate Wash', 'Hair Removal']
      }
    ]
  },
  {
    name: 'Pet Food & Accessories',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Food and accessories for your pets',
    itemCount: '80+ items',
    subcategories: [
      {
        name: 'Dog Food',
        items: ['Dry Dog Food', 'Wet Dog Food', 'Dog Treats']
      },
      {
        name: 'Cat Food',
        items: ['Dry Cat Food', 'Wet Cat Food', 'Cat Treats']
      },
      {
        name: 'Pet Accessories',
        items: ['Collars', 'Leashes', 'Bowls', 'Beds']
      },
      {
        name: 'Pet Care',
        items: ['Shampoos', 'Grooming Brushes', 'Tick & Flea Solutions']
      }
    ]
  },
  {
    name: 'Kids Food & Accessories',
    image: 'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Baby food and child care products',
    itemCount: '120+ items',
    subcategories: [
      {
        name: 'Baby Food',
        items: ['Cereal Mixes', 'Formula Milk', 'Purees']
      },
      {
        name: 'Baby Snacks',
        items: ['Teething Biscuits', 'Healthy Snacks']
      },
      {
        name: 'Diapers & Wipes',
        items: ['Diaper Pants', 'Wet Wipes']
      },
      {
        name: 'Baby Skin Care',
        items: ['Baby Lotion', 'Baby Soap', 'Baby Shampoo']
      },
      {
        name: 'Feeding Accessories',
        items: ['Bottles', 'Sippers', 'Bowls', 'Bibs']
      }
    ]
  }
];