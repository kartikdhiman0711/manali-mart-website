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

```mermaid
graph TD;
  User[Website Visitor] -->|Visits Website| HomePage
  HomePage -->|Clicks Category| ProductList
  HomePage -->|Sees Banners| BannerSection
  User -->|Submits Contact Form| ContactForm --> API["API Route: /api/contact"] --> Email[Email or server storage]

  Admin[Admin Panel] --> AdminPanel
  AdminPanel -->|CRUD Operations| Products["Products stored in server/database"]
  AdminPanel -->|CRUD Operations| Categories["Categories stored in server/database"]
  AdminPanel -->|CRUD Operations| Banners["Banners stored in server/database"]
  AdminPanel -->|CRUD Operations| Discounts["Discount Banners stored in server/database"]
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

See the LICENSE file for details.

---

## Authors

- Kartik Dhiman: kartikdhiman0711@gmail.com
- Anirudh Sharma: anirudhsharma150520@gmail.com
