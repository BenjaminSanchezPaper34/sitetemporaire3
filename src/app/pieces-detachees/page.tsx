"use client";

import { useState } from "react";
import { products, getCategories, getBrands } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import { useScrollReveal } from "@/lib/useScrollReveal";

type SortOption = "relevance" | "price-asc" | "price-desc" | "name";

export default function CataloguePage() {
  useScrollReveal();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [stockOnly, setStockOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = getCategories();
  const brands = getBrands();

  // Filter
  let filtered = products.filter((p) => {
    if (selectedCategory !== "all" && p.category !== selectedCategory) return false;
    if (selectedBrand !== "all" && p.brand !== selectedBrand) return false;
    if (stockOnly && !p.inStock) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.reference.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    switch (sort) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "name": return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-white transition-colors">Accueil</a>
            <span>/</span>
            <span className="text-white">Pièces détachées</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pièces détachées
          </h1>
          <p className="mt-2 text-gray-400">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar filters */}
          <aside data-reveal className="w-full lg:w-64 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Search */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                  Rechercher
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nom ou référence..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                  Catégorie
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                      selectedCategory === "all"
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    Toutes ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                        selectedCategory === cat.name
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                  Marque
                </label>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                      selectedBrand === "all"
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    Toutes
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                        selectedBrand === brand
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stock */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={stockOnly}
                    onChange={(e) => setStockOnly(e.target.checked)}
                    className="rounded border-white/20 bg-white/5 text-accent focus:ring-accent"
                  />
                  En stock uniquement
                </label>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div data-reveal className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="inline-flex items-center gap-1 rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs text-accent"
                  >
                    {selectedCategory}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                )}
                {selectedBrand !== "all" && (
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs text-gold"
                  >
                    {selectedBrand}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-gray-400 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value="relevance">Pertinence</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="name">Nom A-Z</option>
              </select>
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <svg className="text-gray-600 mb-4" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <p className="text-gray-400 text-sm">Aucun produit trouvé</p>
                <button
                  onClick={() => { setSelectedCategory("all"); setSelectedBrand("all"); setStockOnly(false); setSearchQuery(""); }}
                  className="mt-3 text-xs text-accent hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
