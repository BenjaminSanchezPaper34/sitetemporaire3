import productsData from "@/data/products.json";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  subcategory: string;
  reference: string;
  brand: string;
  description: string;
  compatibility: string[];
  inStock: boolean;
  stockQuantity: number;
  delivery: string;
  weight: string;
  images: string[];
  url: string;
}

export const products: Product[] = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategories(): { name: string; count: number }[] {
  const map = new Map<string, number>();
  products.forEach((p) => {
    map.set(p.category, (map.get(p.category) || 0) + 1);
  });
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}
