import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Manali Mart - Your Trusted Mountain Store | Fresh Groceries & Local Specialties',
  description: 'Manali Mart offers fresh groceries, local Himalayan specialties, and daily essentials in the heart of Manali. Free delivery on orders above ₹500. Shop now!',
  keywords: 'Manali mart, grocery store Manali, Himachal Pradesh shopping, mountain fresh products, local specialties Manali',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}