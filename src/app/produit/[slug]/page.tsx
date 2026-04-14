"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug, products } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Produit introuvable</h1>
        <Link href="/pieces-detachees" className="text-accent hover:underline">
          Retour au catalogue
        </Link>
      </div>
    );
  }

  // Related products (same category, different product)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/pieces-detachees" className="hover:text-white transition-colors">Pièces détachées</Link>
          <span>/</span>
          <span className="text-gold/70">{product.category}</span>
          <span>/</span>
          <span className="text-white truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden">
              {product.images[selectedImage] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-contain p-8"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-600">
                  Aucune image
                </div>
              )}

              {/* Stock badge */}
              <div className="absolute top-4 left-4">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En stock — {product.stockQuantity} disponible{product.stockQuantity > 1 ? "s" : ""}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 border border-orange-500/20">
                    Sur commande — 5 à 10 jours
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`h-20 w-20 rounded-xl border overflow-hidden transition-all ${
                      selectedImage === i
                        ? "border-accent ring-1 ring-accent"
                        : "border-white/5 hover:border-white/20"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="h-full w-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Category + Brand */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-gold/70">
                {product.category}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs font-medium text-gray-500">{product.brand}</span>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
              {product.name}
            </h1>

            {/* Reference */}
            <p className="text-sm text-gray-500">
              Réf : <span className="text-gray-400 font-mono">{product.reference}</span>
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">
                {product.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-xl text-gray-500">€</span>
              <span className="text-sm text-gray-600">TTC</span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-gray-400">
              {product.description}
            </p>

            {/* Delivery */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1" />
                <circle cx="6.5" cy="18.5" r="2.5" />
                <circle cx="16.5" cy="18.5" r="2.5" />
              </svg>
              Livraison : {product.delivery}
              {product.weight && <span className="text-gray-600">• {product.weight}</span>}
            </div>

            {/* Add to cart */}
            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <div className="flex items-center rounded-xl border border-white/10 bg-white/5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  +
                </button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.99]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Ajouter au panier — {(product.price * quantity).toFixed(2).replace(".", ",")} €
              </button>
            </div>

            {/* Compatibility */}
            {product.compatibility.length > 0 && (
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  Compatibilité
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.compatibility.map((model) => (
                    <span
                      key={model}
                      className="rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-xs text-gray-400"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 p-3">
                <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <span className="text-xs text-gray-400">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 p-3">
                <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" /><circle cx="6.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" />
                </svg>
                <span className="text-xs text-gray-400">Livraison gratuite dès 200€</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 p-3">
                <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3" />
                </svg>
                <span className="text-xs text-gray-400">Conseil expert</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 p-3">
                <svg className="text-gold shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                <span className="text-xs text-gray-400">Pièces garanties</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-xl font-bold tracking-tight text-white mb-8">
              Produits similaires
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
