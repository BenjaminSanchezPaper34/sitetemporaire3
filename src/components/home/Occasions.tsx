"use client";

import { useState } from "react";
import occasionsData from "@/data/occasions.json";

// Featured jets with official Sea-Doo press images
const FEATURED = [
  {
    model: "RXT-X 325",
    tagline: "Performance ultime",
    image: "/images/jets/rxt-325.png",
    price: "À partir de 22 000 €",
    specs: "325 ch • Superchargé • Racing",
  },
  {
    model: "GTX Limited 300",
    tagline: "Touring premium",
    image: "/images/jets/gtx-300.png",
    price: "À partir de 21 500 €",
    specs: "300 ch • Confort • Sono intégrée",
  },
  {
    model: "Spark Trixx",
    tagline: "Fun accessible",
    image: "/images/jets/spark-trixx.png",
    price: "À partir de 7 490 €",
    specs: "90 ch • Léger • Acrobatique",
  },
];

// Real listings sorted by price
const OCCASIONS = occasionsData
  .sort((a, b) => b.priceNum - a.priceNum)
  .slice(0, 6);

export default function Occasions() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? OCCASIONS : OCCASIONS.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div data-reveal className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Concession Sea-Doo
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Jets d&apos;occasion
            <span className="text-gray-400"> révisés &amp; garantis</span>
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            {occasionsData.length} jet-skis actuellement disponibles au Cap d&apos;Agde
          </p>
        </div>

        {/* Featured jets — press images */}
        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-16">
          {FEATURED.map((jet) => (
            <a
              key={jet.model}
              href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8 transition-all duration-300 hover:border-accent/20 hover:-translate-y-1 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] rounded-full bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image */}
              <div className="relative h-32 sm:h-40 w-full flex items-center justify-center mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={jet.image}
                  alt={`Sea-Doo ${jet.model}`}
                  className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="text-center relative z-10">
                <span className="text-[10px] font-medium uppercase tracking-wider text-gold mb-1 block">
                  {jet.tagline}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  Sea-Doo {jet.model}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{jet.specs}</p>
                <span className="text-sm font-semibold text-accent">{jet.price}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Real listings header */}
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <h3 className="text-xl font-bold text-white">
            Annonces en cours
          </h3>
          <a
            href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-xs font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shrink-0"
          >
            Tout voir sur LeBonCoin
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Listings grid */}
        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 bg-gray-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/occasions/jet-${item.id}.jpg`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    Pro
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-black/60 nav-blur px-2 py-0.5 text-[10px] font-medium text-gray-300">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-4 flex-1">
                <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-white">
                    {item.price.replace(" €", "")}<span className="text-sm text-gray-500 ml-1">€</span>
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-gold">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Garanti
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {OCCASIONS.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              {showAll ? "Voir moins" : `Voir les ${OCCASIONS.length - 3} autres`}
              <svg className={`transition-transform ${showAll ? "rotate-180" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Trust bar */}
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            Révisés en atelier
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
            Garantie concession
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" /><circle cx="6.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" /></svg>
            Livraison possible
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Cap d&apos;Agde
          </span>
        </div>
      </div>
    </section>
  );
}
