"use client";

import { useState } from "react";
import occasionsData from "@/data/occasions.json";

// Show 6 jets, sorted by most recent / highest price
const OCCASIONS = occasionsData
  .sort((a, b) => b.priceNum - a.priceNum)
  .slice(0, 6);

export default function Occasions() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? OCCASIONS : OCCASIONS.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Occasions
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Jets d&apos;occasion
              <br />
              <span className="text-gray-400">révisés &amp; garantis</span>
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              {occasionsData.length} jet-skis actuellement disponibles
            </p>
          </div>
          <a
            href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shrink-0"
          >
            Tout voir sur LeBonCoin
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 bg-gray-900 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/occasions/jet-${item.id}.jpg`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Pro badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-white shadow-lg">
                    Pro — Concession
                  </span>
                </div>
                {/* Date */}
                <div className="absolute top-3 right-3">
                  <span className="rounded-full bg-black/60 nav-blur px-2.5 py-1 text-[10px] font-medium text-gray-300">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col p-5 flex-1">
                <h3 className="text-base font-semibold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {item.price.replace(" €", "")}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">€</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Garanti
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Show more / less */}
        {OCCASIONS.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              {showAll ? "Voir moins" : `Voir les ${OCCASIONS.length - 3} autres`}
              <svg
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Trust bar */}
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            Révisés en atelier
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            Garantie concession
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="2" /><circle cx="6.5" cy="18.5" r="2.5" /><circle cx="16.5" cy="18.5" r="2.5" />
            </svg>
            Livraison possible
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Cap d&apos;Agde
          </span>
        </div>
      </div>
    </section>
  );
}
