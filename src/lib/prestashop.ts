// PrestaShop URL builder — redirects to the existing shop
// Uses real UkooParts model/year data scraped from matosimport.com

const SHOP_URL = "https://www.matosimport.com/fr";

export interface ModelData {
  name: string;
  slug: string;
  years?: number[];
}

export interface BrandData {
  brandName: string;
  brandSlug: string;
  models: ModelData[];
}

// This will be replaced by the full scraped data
// For now, import from ukooparts JSON
import ukoopartsData from "@/data/ukooparts-models-with-years.json";

// Build brand→model→years lookup from scraped data
function buildCatalog(): Record<string, BrandData> {
  return ukoopartsData as Record<string, BrandData>;
}

export const CATALOG = buildCatalog();

export function getBrandNames(): string[] {
  return Object.values(CATALOG).map((b) => b.brandName);
}

export function getModelsForBrand(brandName: string): ModelData[] {
  const entry = Object.values(CATALOG).find((b) => b.brandName === brandName);
  return entry?.models || [];
}

export function getYearsForModel(brandName: string, modelName: string): number[] {
  const models = getModelsForBrand(brandName);
  const model = models.find((m) => m.name === modelName);
  return model?.years || [];
}

/** Get all available years across all brands/models */
export function getAllYears(): number[] {
  const yearsSet = new Set<number>();
  Object.values(CATALOG).forEach((brand) => {
    brand.models.forEach((model) => {
      model.years?.forEach((y) => yearsSet.add(y));
    });
  });
  return [...yearsSet].sort((a, b) => b - a);
}

/** Get all years available for a given brand */
export function getYearsForBrand(brandName: string): number[] {
  const models = getModelsForBrand(brandName);
  const yearsSet = new Set<number>();
  models.forEach((m) => m.years?.forEach((y) => yearsSet.add(y)));
  return [...yearsSet].sort((a, b) => b - a);
}

/** Get brands that have at least one model for the given year */
export function getBrandsForYear(year: number): string[] {
  return Object.values(CATALOG)
    .filter((brand) =>
      brand.models.some((m) => m.years?.includes(year))
    )
    .map((b) => b.brandName);
}

/** Get models for a brand that exist for the given year */
export function getModelsForBrandAndYear(brandName: string, year: number): ModelData[] {
  const models = getModelsForBrand(brandName);
  return models.filter((m) => m.years?.includes(year));
}

/**
 * Build a PrestaShop URL for compatibility search
 */
export function buildShopSearchUrl(
  brand?: string,
  year?: string,
  model?: string
): string {
  if (brand && model) {
    const brandData = Object.values(CATALOG).find((b) => b.brandName === brand);
    const modelData = brandData?.models.find((m) => m.name === model);
    if (brandData && modelData) {
      let url = `${SHOP_URL}/parts/jet-ski/${brandData.brandSlug}/${modelData.slug}.html`;
      if (year) url += `?year=${year}`;
      return url;
    }
  }

  if (brand) {
    const brandData = Object.values(CATALOG).find((b) => b.brandName === brand);
    if (brandData) {
      return `${SHOP_URL}/parts/jet-ski/${brandData.brandSlug}.html`;
    }
  }

  const terms = [brand, model, year].filter(Boolean).join("+");
  if (terms) {
    return `${SHOP_URL}/recherche?s=${encodeURIComponent(terms.replace(/\s+/g, "+"))}`;
  }

  return `${SHOP_URL}/parts/jet-ski`;
}

export function buildShopProductUrl(productUrl: string): string {
  if (productUrl.startsWith("https://www.matosimport.com")) return productUrl;
  return SHOP_URL;
}

export const SHOP_CATALOG_URL = `${SHOP_URL}/parts/jet-ski`;
export const SHOP_HOME_URL = SHOP_URL;
