"use client";

import { useEffect, useRef, useState } from "react";
import { getAllYears, getBrandsForYear, getModelsForBrandAndYear, buildShopSearchUrl } from "@/lib/prestashop";

const ALL_YEARS = getAllYears();

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"pieces" | "occasions" | "location">("pieces");

  // Cascading filter: Année → Marque → Modèle
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  // Filtered options based on selection
  const brands = year ? getBrandsForYear(Number(year)) : [];
  const models = year && brand ? getModelsForBrandAndYear(brand, Number(year)) : [];

  const handleYearChange = (y: string) => {
    setYear(y);
    setBrand("");
    setModel("");
  };

  const handleBrandChange = (b: string) => {
    setBrand(b);
    setModel("");
  };

  const handleSearch = () => {
    const url = buildShopSearchUrl(brand || undefined, year || undefined, model || undefined);
    window.open(url, "_blank");
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!contentRef.current || !sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const progress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.6)));
          contentRef.current.style.opacity = `${1 - progress}`;
          contentRef.current.style.transform = `translateY(${-progress * 60}px) scale(${1 - progress * 0.03})`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover hidden md:block" autoPlay muted loop playsInline preload="metadata" poster="/videos/poster-desktop.jpg">
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>
      <video className="absolute inset-0 w-full h-full object-cover md:hidden" autoPlay muted loop playsInline preload="metadata" poster="/videos/poster-mobile.jpg">
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none" />

      <div ref={contentRef} className="relative z-10 mx-auto max-w-5xl px-6 text-center hero-content will-change-transform">
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 sm:px-4 sm:py-1.5 nav-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium text-gold/90">Concessionnaire officiel Sea-Doo depuis 1991</span>
        </div>

        <h1 className="text-[clamp(32px,7vw,80px)] font-bold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-lg">
          Votre expert<br /><span className="text-accent">jet-ski</span> en France
        </h1>

        <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200 md:text-xl drop-shadow-md">
          Pièces détachées, jet-skis neufs &amp; occasion, équipements et accessoires pour toutes marques.
        </p>

        <div className="mt-8 sm:mt-10 mx-auto max-w-2xl">
          <div className="flex justify-center gap-1 mb-3">
            <button onClick={() => setActiveTab("pieces")} className={`rounded-full px-3 sm:px-5 py-2 text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "pieces" ? "bg-accent text-white shadow-lg" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}>
              🔧 <span className="hidden sm:inline">Trouver mes </span>Pièces
            </button>
            <button onClick={() => setActiveTab("occasions")} className={`rounded-full px-3 sm:px-5 py-2 text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "occasions" ? "bg-accent text-white shadow-lg" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}>
              🚤 Occasions
            </button>
            <button onClick={() => setActiveTab("location")} className={`rounded-full px-3 sm:px-5 py-2 text-[11px] sm:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "location" ? "bg-[#36b4a3] text-white shadow-lg" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}>
              🌊 Location
            </button>
          </div>

          {activeTab === "pieces" && (
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 drop-shadow-sm">
                Sélectionnez votre jet-ski — seules les combinaisons existantes sont proposées
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/50 p-2 nav-blur">
                <div className="flex flex-col gap-2 sm:flex-row">
                  {/* 1. Année — first pick */}
                  <select
                    value={year}
                    onChange={(e) => handleYearChange(e.target.value)}
                    className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="" disabled>Année</option>
                    {ALL_YEARS.map((y) => <option key={y} value={y} className="bg-gray-900">{y}</option>)}
                  </select>

                  {/* 2. Marque — filtered by year */}
                  <select
                    value={brand}
                    onChange={(e) => handleBrandChange(e.target.value)}
                    disabled={!year}
                    className={`flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent ${!year ? "opacity-40 cursor-not-allowed text-gray-500" : "text-white"}`}
                  >
                    <option value="" disabled>{year ? `${brands.length} marques` : "Marque"}</option>
                    {brands.map((b) => <option key={b} value={b} className="bg-gray-900">{b}</option>)}
                  </select>

                  {/* 3. Modèle — filtered by year + brand */}
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    disabled={!brand}
                    className={`flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent ${!brand ? "opacity-40 cursor-not-allowed text-gray-500" : "text-white"}`}
                  >
                    <option value="" disabled>{brand ? `${models.length} modèles` : "Modèle"}</option>
                    {models.map((m) => <option key={m.slug} value={m.name} className="bg-gray-900">{m.name}</option>)}
                  </select>

                  <button
                    onClick={handleSearch}
                    disabled={!brand || !model}
                    className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98] ${brand && model ? "bg-accent hover:bg-accent-hover" : "bg-gray-700 cursor-not-allowed opacity-50"}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="hidden sm:inline">Rechercher</span>
                    <span className="sm:hidden">Go</span>
                  </button>
                </div>
              </div>
              <p className="mt-2 text-[10px] sm:text-xs text-gray-400/80">
                {brand && model ? "Cliquez sur Rechercher pour voir les pièces compatibles sur la boutique" : brand ? "Choisissez un modèle pour continuer" : year ? "Choisissez une marque" : "Choisissez l'année de votre jet-ski"}
              </p>
            </div>
          )}

          {activeTab === "occasions" && (
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 drop-shadow-sm">
                Découvrez nos jet-skis d&apos;occasion révisés et garantis
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/50 p-6 sm:p-8 nav-blur">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-sm font-medium">Révisés en atelier — Garantie concession</span>
                  </div>
                  <a href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 sm:px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] w-full sm:w-auto whitespace-nowrap">
                    <span className="hidden sm:inline">Voir nos occasions sur LeBonCoin</span>
                    <span className="sm:hidden">Nos occasions</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                  <p className="text-[10px] text-gray-500">Annonces mises à jour en temps réel</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "location" && (
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 drop-shadow-sm">
                Sea-Doo dernière génération au Cap d&apos;Agde
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/50 p-6 sm:p-8 nav-blur">
                <div className="flex flex-col items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/logo-location.svg" alt="Jet Rider — Location" className="h-8 sm:h-10 w-auto" />
                  <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
                    <span className="rounded-full bg-white/5 border border-white/5 px-3 py-1">Randonnées guidées</span>
                    <span className="rounded-full bg-white/5 border border-white/5 px-3 py-1">Balades libres</span>
                    <span className="rounded-full bg-white/5 border border-white/5 px-3 py-1">1h à la journée</span>
                  </div>
                  <a href="https://locationjet.matosimport.com" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#36b4a3] px-6 sm:px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2ea393] active:scale-[0.98] w-full sm:w-auto whitespace-nowrap">
                    Réserver
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                  <a href="tel:0467266662" className="text-xs text-gray-500 hover:text-white transition-colors">
                    04 67 26 66 62
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400/70">Découvrir</span>
        <svg className="animate-bounce-down text-gray-400/70" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </section>
  );
}
