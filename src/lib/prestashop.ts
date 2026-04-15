// PrestaShop URL builder — redirects to the existing shop

const SHOP_URL = "https://www.matosimport.com/fr";

// Brand slug mapping
const BRAND_SLUGS: Record<string, string> = {
  "Sea-Doo": "seadoo",
  "Yamaha": "yamaha",
  "Kawasaki": "kawasaki",
};

// Model data per brand — slug must match UkooParts database
export const MODELS: Record<string, { label: string; slug: string }[]> = {
  "Sea-Doo": [
    { label: "GTX 130", slug: "gtx-130" },
    { label: "GTX 155", slug: "gtx-155" },
    { label: "GTX 170", slug: "gtx-170" },
    { label: "GTX 230", slug: "gtx-230" },
    { label: "GTX 300", slug: "gtx-300" },
    { label: "GTI 90", slug: "gti-90" },
    { label: "GTI 130", slug: "gti-130" },
    { label: "GTI SE 170", slug: "gti-se-170" },
    { label: "GTR 230", slug: "gtr-230" },
    { label: "GTR 300", slug: "gtr-300" },
    { label: "RXP-X 300", slug: "rxp-x-300" },
    { label: "RXP-X 325", slug: "rxp-x-325" },
    { label: "RXT 300", slug: "rxt-300" },
    { label: "RXT-X 325", slug: "rxt-x-325" },
    { label: "Spark 60", slug: "spark-60" },
    { label: "Spark 90", slug: "spark-90" },
    { label: "Spark Trixx", slug: "spark-trixx-2up" },
    { label: "Wake 170", slug: "wake-170" },
    { label: "Wake Pro 230", slug: "wake-pro-230" },
    { label: "Fish Pro", slug: "fish-pro" },
  ],
  Yamaha: [
    { label: "FX HO", slug: "fx-ho" },
    { label: "FX SVHO", slug: "fx-svho" },
    { label: "VX", slug: "vx" },
    { label: "EX", slug: "ex" },
    { label: "GP 1800", slug: "gp-1800" },
    { label: "Super Jet", slug: "super-jet" },
  ],
  Kawasaki: [
    { label: "Ultra 310", slug: "ultra-310" },
    { label: "Ultra 160", slug: "ultra-160" },
    { label: "STX 160", slug: "stx-160" },
    { label: "SX-R", slug: "sx-r" },
  ],
};

/**
 * Build a PrestaShop URL for compatibility search
 * Strategy: direct to model page if possible, fallback to search
 */
export function buildShopSearchUrl(
  brand?: string,
  year?: string,
  model?: string
): string {
  // If we have brand + model, try direct model page
  if (brand && model) {
    const brandSlug = BRAND_SLUGS[brand];
    const modelData = MODELS[brand]?.find((m) => m.label === model);
    if (brandSlug && modelData) {
      let url = `${SHOP_URL}/parts/jet-ski/${brandSlug}/${modelData.slug}.html`;
      if (year) url += `?year=${year}`;
      return url;
    }
  }

  // If only brand, go to brand page
  if (brand) {
    const brandSlug = BRAND_SLUGS[brand];
    if (brandSlug) {
      return `${SHOP_URL}/parts/jet-ski/${brandSlug}.html`;
    }
  }

  // Fallback: search with all terms
  const terms = [brand, model, year].filter(Boolean).join("+");
  if (terms) {
    return `${SHOP_URL}/recherche?s=${encodeURIComponent(terms.replace(/\s+/g, "+"))}`;
  }

  // Default: parts catalog
  return `${SHOP_URL}/parts/jet-ski`;
}

/** Build a direct product link on PrestaShop */
export function buildShopProductUrl(productUrl: string): string {
  // If we have the original PrestaShop URL, use it
  if (productUrl.startsWith("https://www.matosimport.com")) {
    return productUrl;
  }
  // Fallback to shop homepage
  return SHOP_URL;
}

/** Shop catalog URL */
export const SHOP_CATALOG_URL = `${SHOP_URL}/parts/jet-ski`;
export const SHOP_HOME_URL = SHOP_URL;
