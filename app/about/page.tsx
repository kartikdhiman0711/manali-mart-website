import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us - 10+ Years Serving Manali',
  description: 'Learn about Manali Mart - your trusted neighborhood store since 2014. Located at 18 Mile, Manali, serving 5000+ customers with quality products and exceptional service. Meet our team.',
  keywords: 'about Manali Mart, grocery store history, Manali shopping, local business Manali, 18 Mile store',
  openGraph: {
    title: 'About Manali Mart - Your Trusted Mountain Store',
    description: 'Serving the Manali community since 2014 with dedication and care',
    url: 'https://manalimart.co.in/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Manali Mart',
      }
    ],
  },
  alternates: {
    canonical: 'https://manalimart.co.in/about',
  },
};

export default function About() {
  return <AboutClient />;
}