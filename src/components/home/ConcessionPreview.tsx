"use client";

import Link from "next/link";

export default function ConcessionPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Depuis 1991
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            La concession &amp; nos services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Concession card */}
          <Link
            href="/concessionnaire"
            data-reveal
            className="group relative rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/concession/batiment.jpg"
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 min-h-[280px] flex flex-col justify-end">
              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-medium mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Cap d&apos;Agde — Île des Loisirs
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-accent transition-colors">
                Concessionnaire officiel Sea-Doo
              </h3>
              <p className="text-sm text-gray-300 mb-4 max-w-md drop-shadow-md">
                Vente de jet-skis neufs et occasion, showroom avec la gamme complète,
                financement et reprise de votre ancien jet.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Jets neufs</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Occasions révisées</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Financement</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                Découvrir la concession
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </div>
          </Link>

          {/* Services card */}
          <Link
            href="/services"
            data-reveal
            className="group relative rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/15 hover:-translate-y-1"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/concession/showroom.jpg"
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 min-h-[280px] flex flex-col justify-end">
              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-medium mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                Atelier certifié Sea-Doo
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg group-hover:text-accent transition-colors">
                Atelier &amp; Services
              </h3>
              <p className="text-sm text-gray-300 mb-4 max-w-md drop-shadow-md">
                Réparation toutes marques, entretien, hivernage et gardiennage.
                33 ans d&apos;expertise mécanique au service de votre jet-ski.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Réparation</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Entretien</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Hivernage</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-gray-300">Gardiennage</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                Voir nos services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
