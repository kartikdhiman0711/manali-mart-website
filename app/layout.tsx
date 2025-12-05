import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://manalimart.co.in'),
  title: {
    default: 'Manali Mart - Premium Grocery Store in Manali | Fresh Products & Local Specialties',
    template: '%s | Manali Mart'
  },
  description: 'Manali Mart is your trusted grocery store in Manali, HP offering fresh dairy products, groceries, snacks, household essentials, and local Himalayan specialties since 2014. Visit us at 18 Mile for quality products.',
  keywords: [
    'Manali mart',
    'grocery store Manali',
    'Manali shopping',
    'Himachal Pradesh grocery',
    'fresh products Manali',
    'dairy products Manali',
    'local store Manali',
    '18 Mile Manali',
    'Manali supermarket',
    'Himachal shopping',
    'mountain grocery store',
    'Manali daily needs',
    'Kullu Manali shopping',
    'Manali retail store'
  ],
  authors: [{ name: 'Manali Mart' }],
  creator: 'Manali Mart',
  publisher: 'Manali Mart',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://manalimart.co.in',
    siteName: 'Manali Mart',
    title: 'Manali Mart - Premium Grocery Store in Manali',
    description: 'Your trusted neighborhood store in the heart of Manali, serving quality products since 2014. Fresh dairy, groceries, and local specialties.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manali Mart - Your Trusted Mountain Store',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manali Mart - Premium Grocery Store in Manali',
    description: 'Your trusted neighborhood store in the heart of Manali, serving quality products since 2014.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://manalimart.co.in',
  },
  category: 'shopping',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://manalimart.co.in/#organization',
      name: 'Manali Mart',
      image: 'https://manalimart.co.in/logo.png',
      logo: 'https://manalimart.co.in/logo.png',
      url: 'https://manalimart.co.in',
      telephone: '+91-6230337333',
      email: 'info@manalimart.co.in',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Behind Bran School 17-18 Miles',
        addressLocality: 'Manali',
        addressRegion: 'Himachal Pradesh',
        postalCode: '175131',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.16507,
        longitude: 77.17541
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '21:00'
      },
      sameAs: [
        'https://www.facebook.com/manalimart',
        'https://www.instagram.com/manalimart',
        'https://wa.me/916230335333'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150'
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://manalimart.co.in/#website',
      url: 'https://manalimart.co.in',
      name: 'Manali Mart',
      description: 'Your trusted grocery store in Manali',
      publisher: {
        '@id': 'https://manalimart.co.in/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://manalimart.co.in/products?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'GroceryStore',
      '@id': 'https://manalimart.co.in/#store',
      name: 'Manali Mart',
      description: 'Premium grocery store offering fresh dairy products, groceries, snacks, household essentials, and local Himalayan specialties.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Behind Bran School 17-18 Miles',
        addressLocality: 'Manali',
        addressRegion: 'Himachal Pradesh',
        postalCode: '175131',
        addressCountry: 'IN'
      },
      telephone: '+91-6230337333',
      openingHours: 'Mo-Su 08:00-21:00',
      paymentAccepted: 'Cash, Credit Card, Debit Card, UPI',
      currenciesAccepted: 'INR'
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}