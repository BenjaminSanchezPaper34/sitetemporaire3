import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produit/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-white/[0.03]">
        {product.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-600">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.inStock ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              En stock
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-orange-400 border border-orange-500/20">
              Sur commande
            </span>
          )}
        </div>

        {/* Brand badge */}
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-gray-300 nav-blur">
            {product.brand}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-medium uppercase tracking-wider text-gold/70 mb-1.5">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-white leading-snug mb-2 line-clamp-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">
          {product.description}
        </p>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="text-xl font-bold text-white">
              {product.price.toFixed(2).replace(".", ",")}
            </span>
            <span className="text-sm text-gray-500 ml-1">€</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            Voir
          </span>
        </div>
      </div>
    </Link>
  );
}
