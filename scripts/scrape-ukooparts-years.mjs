#!/usr/bin/env node
/**
 * Scrape year data for all UkooParts models from matosimport.com
 *
 * Usage: node scripts/scrape-ukooparts-years.mjs
 *
 * Fetches each model page and extracts available years from the year selector.
 * Outputs a complete JSON file with brand > model > years mapping.
 *
 * Rate-limited to avoid hammering the server (300ms between requests).
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.matosimport.com';
const DELAY_MS = 300;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchYearsForModel(brandSlug, modelSlug) {
  const url = `${BASE_URL}/fr/parts/jet-ski/${brandSlug}/${modelSlug}.html`;
  try {
    const res = await fetch(url);
    if (!res.ok) return { slug: modelSlug, years: [], error: `HTTP ${res.status}` };

    const html = await res.text();

    // Years appear in the year selector as links or options.
    // Pattern: data-year="2023" or href containing /year/ or plain text "2018 2019 2020..."
    // The UkooParts system uses a year filter with individual year links/buttons.

    // Match year values from the HTML - they appear as year filter options
    // Look for patterns like: >2020< or data-year="2020" or year=2020
    const yearPattern = /(?:data-year=["']?|[?&]year=|>)\s*((?:19|20)\d{2})\s*(?:<|["'&])/g;
    const years = new Set();
    let match;
    while ((match = yearPattern.exec(html)) !== null) {
      const year = parseInt(match[1], 10);
      if (year >= 1990 && year <= 2030) {
        years.add(year);
      }
    }

    // Also try matching from the "Toutes annees" text block pattern
    const textBlockPattern = /Toutes\s+ann[ée]es\s+([\d\s]+)/i;
    const textMatch = html.match(textBlockPattern);
    if (textMatch) {
      const yearNums = textMatch[1].match(/\d{4}/g);
      if (yearNums) {
        yearNums.forEach((y) => years.add(parseInt(y, 10)));
      }
    }

    return {
      slug: modelSlug,
      years: [...years].sort((a, b) => a - b),
    };
  } catch (err) {
    return { slug: modelSlug, years: [], error: err.message };
  }
}

async function main() {
  const dataPath = resolve(__dirname, '../src/data/ukooparts-models.json');
  const data = JSON.parse(readFileSync(dataPath, 'utf-8'));

  const result = {};

  for (const [brandKey, brand] of Object.entries(data.brands)) {
    console.log(`\n--- ${brand.brandName} (${brand.models.length} models) ---`);
    result[brandKey] = {
      brandName: brand.brandName,
      brandSlug: brand.brandSlug,
      models: [],
    };

    let count = 0;
    for (const model of brand.models) {
      count++;
      const yearData = await fetchYearsForModel(brand.brandSlug, model.slug);

      result[brandKey].models.push({
        name: model.name,
        slug: model.slug,
        years: yearData.years,
        ...(yearData.error ? { error: yearData.error } : {}),
      });

      const status = yearData.years.length > 0
        ? yearData.years.join(', ')
        : yearData.error || 'no years found';
      console.log(`  [${count}/${brand.models.length}] ${model.name} -> ${status}`);

      await sleep(DELAY_MS);
    }
  }

  const outPath = resolve(__dirname, '../src/data/ukooparts-models-with-years.json');
  writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');
  console.log(`\nDone! Written to ${outPath}`);

  // Print summary
  for (const [brandKey, brand] of Object.entries(result)) {
    const withYears = brand.models.filter((m) => m.years.length > 0).length;
    const withErrors = brand.models.filter((m) => m.error).length;
    console.log(`${brand.brandName}: ${withYears}/${brand.models.length} models with years, ${withErrors} errors`);
  }
}

main().catch(console.error);
