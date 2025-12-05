import { Metadata } from 'next';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
  title: 'Products - Browse 1200+ Items',
  description: 'Explore 1200+ products across dairy, groceries, snacks, beverages, household items, personal care, and pet supplies at Manali Mart. Quality products at competitive prices.',
  keywords: 'Manali products, grocery items Manali, dairy products, snacks Manali, beverages, household items',
  openGraph: {
    title: 'Products | Manali Mart',
    description: 'Browse our extensive collection of 1200+ quality products',
    url: 'https://manalimart.co.in/products',
    images: [
      {
        url: '/og-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Manali Mart Products',
      }
    ],
  },
  alternates: {
    canonical: 'https://manalimart.co.in/products',
  },
};

export default function Products() {
  return <ProductsClient />;
}