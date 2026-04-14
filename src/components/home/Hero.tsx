"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const BRANDS = ["Sea-Doo", "Yamaha", "Kawasaki"];

const YEARS = Array.from({ length: 30 }, (_, i) => `${2026 - i}`);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          searchRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: true,
        },
        opacity: 0,
        scale: 0.95,
        y: -50,
      });

      gsap.to(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "10% top",
          end: "50% top",
          scrub: true,
        },
        opacity: 0,
        y: -30,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video background — desktop */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src="/videos/hero-desktop.webm" type="video/webm" />
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      {/* Video background — mobile */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src="/videos/hero-mobile.webm" type="video/webm" />
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient edges */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 nav-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium text-gold/90">
            Concessionnaire officiel Sea-Doo depuis 1991
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-[clamp(36px,8vw,88px)] font-bold leading-[0.95] tracking-[-0.03em] text-white drop-shadow-lg"
        >
          Votre expert
          <br />
          <span className="text-accent">jet-ski</span> en France
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl drop-shadow-md"
        >
          Pièces détachées, équipements et accessoires pour toutes marques.
          Plus de 38 000 références disponibles.
        </p>

        {/* Compatibility search */}
        <div ref={searchRef} className="mt-10 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/15 bg-black/50 p-2 nav-blur">
            <div className="flex flex-col gap-2 sm:flex-row">
              <select
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  Marque
                </option>
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand} className="bg-gray-900">
                    {brand}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  Année
                </option>
                {YEARS.map((year) => (
                  <option key={year} value={year} className="bg-gray-900">
                    {year}
                  </option>
                ))}
              </select>
              <select
                className="flex-1 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white appearance-none cursor-pointer transition-colors hover:bg-white/15 focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>
                  Modèle
                </option>
              </select>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                Rechercher
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400 drop-shadow-sm">
            Trouvez les pièces compatibles avec votre jet-ski en 3 clics
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 drop-shadow-sm">
          Découvrir
        </span>
        <svg
          className="animate-bounce-down text-gray-400"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
