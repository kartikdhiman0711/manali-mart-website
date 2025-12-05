import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://manalimart.co.in';
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
  
  let productPages: MetadataRoute.Sitemap = [];
  
  try {
    const res = await fetch(`${baseUrl}/api/products`, {
      next: { revalidate: 86400 }
    });
    
    if (res.ok) {
      const categories = await res.json();
      
      productPages = categories.flatMap((category: any) =>
        category.subcategories.flatMap((subcategory: any) =>
          subcategory.products.map((product: any) => ({
            url: `${baseUrl}/products/${product.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
          }))
        )
      );
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
  
  return [...staticPages, ...productPages];
}