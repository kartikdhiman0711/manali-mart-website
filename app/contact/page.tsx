import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us - Visit or Reach Out',
  description: 'Contact Manali Mart at +91 62303 37333 or visit us at Behind Bran School, 18 Mile, Manali. Open 8 AM - 9 PM daily. Get directions, parking information, and answers to FAQs.',
  keywords: 'contact Manali Mart, Manali store location, 18 Mile Manali, grocery store contact, Manali address',
  openGraph: {
    title: 'Contact Us | Manali Mart',
    description: 'Visit us or get in touch - we are here to help',
    url: 'https://manalimart.co.in/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Manali Mart',
      }
    ],
  },
  alternates: {
    canonical: 'https://manalimart.co.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}