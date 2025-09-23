# Manali Mart – Product Catalog Website

A full-stack web application built for **Manali Mart**, a local store in Manali, Himachal Pradesh.  
The website allows customers to browse products category-wise, view pricing, see banners and discount offers, and contact the store via a contact form.  
An admin panel is included to manage products, categories, subcategories, banners, and discount banners.

---

## Features

### Customer-Facing Website
- Homepage with main banners and discount banners  
- Product listing organized by category and subcategory  
- Product details with pricing and optional discount information  
- Responsive design for desktop and mobile  
- Contact form to send inquiries directly to Manali Mart  

### Admin Panel
- CRUD (Create, Read, Update, Delete) operations for:
  - Products
  - Categories
  - Subcategories
  - Banners
  - Discount Banners
- Optional authentication for admin access to secure the dashboard

---

## Tech Stack
```
| Layer           | Technology |
|-----------------|------------|
| Frontend        | Next.js (React), TailwindCSS |
| Backend/API     | Next.js API Routes (Node.js) |
| Forms           | Next.js API Routes + Nodemailer or server-side storage |
| Deployment      | Vercel |
| Images          | Local `/public` folder or Cloudinary |
```
---

## Project Structure
```
manali-mart-website/
├── pages/ # Next.js pages
│ ├── index.js # Homepage
│ ├── products/[category].js
│ ├── contact.js
│ └── admin/ # Admin panel pages
├── components/ # Reusable UI components
├── lib/ # API helpers / server-side utilities
├── public/ # Images, banners
├── styles/ # Global CSS / Tailwind config
├── .env.local # Environment variables
├── .gitignore
├── package.json
├── LICENSE
└── README.md
```
---

## Project Data Flow

### Level 0 (Context Diagram)

```mermaid
flowchart LR
  Visitor[Visitor] -->|View categories, products, offers| Mart((Mart Website))
  Mart -->|Show products, categories, offers, discounts| Visitor
  Admin[Admin] -->|CRUD operations| Mart
  Mart -->|Authentication success/failure| Admin
```

### Level 1 DFD

```mermaid
flowchart TD
  Visitor[Visitor] -->|Browse/Search Products| P1((P1: Product Browsing))
  Visitor -->|View Offers/Discounts| P2((P2: Offer & Discount Display))
  Visitor -->|View About/Contact Page| P3((P3: Static Pages))
  Visitor -->|Submit Contact Form| P4((P4: Contact Query Management))

  Admin[Admin] -->|Login| P5((P5: Admin Authentication))
  P5 --> AdminDB[(Admin Users DB)]

  Admin -->|CRUD Items, Offers, Discounts, Queries| P6((P6: Admin CRUD Operations))

  %% Data Stores
  P1 --> ProductDB[(Products DB)]
  P1 --> CategoryDB[(Categories DB)]
  P1 --> SubcategoryDB[(Subcategories DB)]
  P2 --> OfferDB[(Offers DB)]
  P2 --> DiscountDB[(Discounts DB)]
  P4 --> ContactDB[(Contact Queries DB)]
  P6 --> ProductDB
  P6 --> CategoryDB
  P6 --> SubcategoryDB
  P6 --> OfferDB
  P6 --> DiscountDB
  P6 --> ContactDB
```

### Level 2 DFD (Detailed)
- P1: Product Browsing
  ```mermaid
  flowchart TD
  Visitor[Visitor] -->|Choose Category| P1_1((P1.1: View Categories))
  Visitor -->|Search Items| P1_2((P1.2: Search Products))
  Visitor -->|Apply Filters| P1_3((P1.3: Apply Filters))
  Visitor -->|View Product Details| P1_4((P1.4: Product Description Page))

  P1_1 --> CategoryDB[(Categories)]
  P1_1 --> SubcategoryDB[(Subcategories)]
  P1_2 --> ProductDB[(Products)]
  P1_3 --> ProductDB
  P1_4 --> ProductDB
  P1_4 --> DiscountDB[(Discounts)]
```
- P6: Admin CRUD
```mermaid
flowchart TD
  Admin[Admin] -->|Add/Edit/Delete Categories| P6_1((P6.1: Manage Categories))
  Admin -->|Add/Edit/Delete Subcategories| P6_2((P6.2: Manage Subcategories))
  Admin -->|Add/Edit/Delete Products| P6_3((P6.3: Manage Products))
  Admin -->|Add/Edit/Delete Offers| P6_4((P6.4: Manage Offers))
  Admin -->|Add/Edit/Delete Discounts| P6_5((P6.5: Manage Discounts))
  Admin -->|View/Resolve Queries| P6_6((P6.6: Manage Contact Queries))

  P6_1 --> CategoryDB[(Categories)]
  P6_2 --> SubcategoryDB[(Subcategories)]
  P6_3 --> ProductDB[(Products)]
  P6_4 --> OfferDB[(Offers)]
  P6_5 --> DiscountDB[(Discounts)]
  P6_6 --> ContactDB[(Contact Queries)]
```

---

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/manali-mart-website.git
cd manali-mart-website

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit http://localhost:3000

---

## Deployment

- Recommended platform: Vercel
- Add environment variables in the Vercel dashboard
- Deploy directly from GitHub repository

---

## License

This project is shared publicly for educational and portfolio purposes only.  
Copying, redistributing, or using this code for commercial purposes is not allowed without permission.

See the [LICENSE](LICENSE) file for details.

---

## Authors

- Kartik Dhiman: kartikdhiman0711@gmail.com
- Anirudh Sharma: anirudhsharma150520@gmail.com
