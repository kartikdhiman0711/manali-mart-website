import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Manali Mart - Premium Grocery Store in Manali | Fresh Products & Local Specialties',
  description: 'Shop at Manali Mart for fresh dairy products, groceries, snacks, household essentials, and authentic Himalayan specialties. Located at 18 Mile, Manali. Open 8 AM - 9 PM daily.',
  keywords: 'Manali mart, grocery store Manali, fresh products Manali, dairy Manali, shopping Manali, 18 Mile store',
  openGraph: {
    title: 'Manali Mart - Your Trusted Mountain Store',
    description: 'Fresh groceries and local specialties in the heart of Manali since 2014',
    url: 'https://manalimart.co.in',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Manali Mart Home',
      }
    ],
  },
  alternates: {
    canonical: 'https://manalimart.co.in',
  },
};

export default function Home() {
  return <HomeClient />;
}