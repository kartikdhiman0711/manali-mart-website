import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Manali Mart - Your Trusted Grocery Store in Manali Since 2014',
  description: 'Manali Mart - Your trusted grocery store since 2014. Fresh dairy, groceries, snacks & daily essentials. Visit us at 18 Mile, Manali. Open 8 AM-9 PM daily!',
  keywords: 'Manali mart, grocery store Manali, fresh products Manali, dairy Manali, shopping Manali, 18 Mile store, Manali supermarket, grocery near me Manali',
  openGraph: {
    title: 'Manali Mart - Your Trusted Grocery Store Since 2014',
    description: 'Fresh dairy, groceries, snacks & daily essentials. Visit us at 18 Mile, Manali. Open 8 AM-9 PM daily!',
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