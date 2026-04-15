"use client";

import { useEffect, useRef, useState } from "react";

const BRANDS = ["Sea-Doo", "Yamaha", "Kawasaki"];
const YEARS = Array.from({ length: 30 }, (_, i) => `${2026 - i}`);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"pieces" | "occasions">("pieces");

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
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video background — desktop */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay muted loop playsInline preload="metadata"
        poster="/videos/poster-desktop.jpg"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* Video background — mobile */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        autoPlay muted loop playsInline preload="metadata"
        poster="/videos/poster-mobile.jpg"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black pointer-events-none" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center hero-content will-change-transform"
      >
        {/* Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 sm:px-4 sm:py-1.5 nav-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium text-gold/90">
            Concessionnaire officiel Sea-Doo depuis 1991
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[clamp(32px,7vw,80px)] font-bold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-lg">
          Votre expert
          <br />
          <span className="text-accent">jet-ski</span> en France
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200 md:text-xl drop-shadow-md">
          Pièces détachées, jet-skis neufs &amp; occasion, équipements
          et accessoires pour toutes marques.
        </p>

        {/* Tabs + Search */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-2xl">
          {/* Tab switcher */}
          <div className="flex justify-center gap-1 mb-3">
            <button
              onClick={() => setActiveTab("pieces")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "pieces"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              🔧 Pièces détachées
            </button>
            <button
              onClick={() => setActiveTab("occasions")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "occasions"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              🚤 Jets occasion
            </button>
          </div>

          {/* Pieces search */}
          {activeTab === "pieces" && (
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 drop-shadow-sm">
                Trouvez les pièces compatibles avec votre jet-ski
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/50 p-2 nav-blur">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <select className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent" defaultValue="">
                    <option value="" disabled>Marque</option>
                    {BRANDS.map((b) => <option key={b} value={b} className="bg-gray-900">{b}</option>)}
                  </select>
                  <select className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent" defaultValue="">
                    <option value="" disabled>Année</option>
                    {YEARS.map((y) => <option key={y} value={y} className="bg-gray-900">{y}</option>)}
                  </select>
                  <select className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent" defaultValue="">
                    <option value="" disabled>Modèle</option>
                  </select>
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="hidden sm:inline">Rechercher</span>
                    <span className="sm:hidden">Go</span>
                  </button>
                </div>
              </div>
              <p className="mt-2 text-[10px] sm:text-xs text-gray-400/80">
                Plus de 38 000 références disponibles
              </p>
            </div>
          )}

          {/* Occasions CTA */}
          {activeTab === "occasions" && (
            <div>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 drop-shadow-sm">
                Découvrez nos jet-skis d&apos;occasion révisés et garantis
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/50 p-6 sm:p-8 nav-blur">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-gold">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-sm font-medium">Révisés en atelier — Garantie concession</span>
                  </div>
                  <a
                    href="https://www.leboncoin.fr/recherche?text=matos+import+by+jeff&kst=k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] w-full sm:w-auto"
                  >
                    Voir nos occasions sur LeBonCoin
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                  <p className="text-[10px] text-gray-500">
                    Annonces mises à jour en temps réel
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400/70">Découvrir</span>
        <svg className="animate-bounce-down text-gray-400/70" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
