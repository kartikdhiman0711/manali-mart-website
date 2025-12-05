import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

// Helper function to generate slug
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface Product {
  id: string;
  name: string;
  description: string;
  image?: string;
  price: number;
  brand?: string;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://manalimart.co.in'}/api/products`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      return {
        title: 'Product Not Found | Manali Mart',
        description: 'The product you are looking for is not available.',
      };
    }
    
    const categories = await res.json();
    let product: Product | null = null;
    let categoryName = '';
    let subcategoryName = '';
    
    for (const category of categories) {
      for (const subcategory of category.subcategories) {
        const found = subcategory.products.find(
          (p: any) => generateSlug(p.name) === resolvedParams.slug
        );
        if (found) {
          product = found;
          categoryName = category.name;
          subcategoryName = subcategory.name;
          break;
        }
      }
      if (product) break;
    }
    
    if (!product) {
      return {
        title: 'Product Not Found | Manali Mart',
        description: 'The product you are looking for is not available.',
      };
    }
    
    const productDescription = product.description || 
      `Buy ${product.name} at Manali Mart. Available in ${subcategoryName} category.`;
    
    return {
      title: `${product.name} - Buy at Best Price`,
      description: `${productDescription} Available at ₹${product.price}. ${product.brand ? `Brand: ${product.brand}.` : ''} Visit our store at 18 Mile, Manali or call +91 62303 37333.`,
      keywords: `${product.name}, ${product.brand || 'quality'} products, buy in Manali, Manali Mart, ${categoryName}`,
      openGraph: {
        title: `${product.name} | Manali Mart`,
        description: productDescription,
        images: product.image ? [
          {
            url: product.image,
            width: 800,
            height: 600,
            alt: product.name,
          }
        ] : ['/og-products.jpg'],
        url: `https://manalimart.co.in/products/${generateSlug(product.name)}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.name} | Manali Mart`,
        description: productDescription,
        images: product.image ? [product.image] : ['/og-products.jpg'],
      },
      alternates: {
        canonical: `https://manalimart.co.in/products/${generateSlug(product.name)}`,
      },
    };
  } catch (error) {
    console.error('Error generating product metadata:', error);
    return {
      title: 'Product | Manali Mart',
      description: 'Quality products at Manali Mart',
    };
  }
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProductDetailClient params={params} />;
}