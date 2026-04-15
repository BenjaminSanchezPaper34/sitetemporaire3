"use client";

import Link from "next/link";

export default function DualActivity() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
            Deux activités, une passion
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Concession &amp; Location
            <br />
            <span className="text-gray-400">au Cap d&apos;Agde</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* CONCESSION — Rouge */}
          <div data-reveal className="group relative rounded-3xl overflow-hidden border border-accent/10 hover:border-accent/30 transition-all duration-500">
            {/* Background */}
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/concession/batiment.jpg" alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
              {/* Red accent glow */}
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 min-h-[420px] flex flex-col justify-end">
              {/* Logo */}
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/logo-concession.svg" alt="Matos Import by Jeff — Concession" className="h-10 sm:h-12 w-auto drop-shadow-lg" loading="lazy" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                Concessionnaire
                <br />
                <span className="text-accent">officiel Sea-Doo</span>
              </h3>

              <p className="text-sm text-gray-300 mb-6 max-w-sm drop-shadow-md leading-relaxed">
                Vente de jet-skis neufs et occasion, showroom avec la gamme complète,
                financement et reprise de votre ancien jet.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-accent">33+</div>
                  <div className="text-[10px] text-gray-500">ans</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-white">38k+</div>
                  <div className="text-[10px] text-gray-500">pièces</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-white">60+</div>
                  <div className="text-[10px] text-gray-500">marques</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[10px] text-accent font-medium">Jets neufs</span>
                <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[10px] text-accent font-medium">Occasions révisées</span>
                <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[10px] text-accent font-medium">Pièces détachées</span>
                <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-[10px] text-accent font-medium">Atelier</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/concessionnaire" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all active:scale-[0.98]">
                  Découvrir
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
                <a href="tel:0467265770" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/30 nav-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all">
                  04 67 26 57 70
                </a>
              </div>
            </div>
          </div>

          {/* LOCATION — Bleu/Turquoise */}
          <div data-reveal className="group relative rounded-3xl overflow-hidden border border-[#36b4a3]/10 hover:border-[#36b4a3]/30 transition-all duration-500">
            {/* Background video */}
            <video className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay muted loop playsInline preload="metadata" poster="/videos/poster-location.jpg">
              <source src="/videos/location-desktop.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            {/* Turquoise accent glow */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#36b4a3]/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 p-8 sm:p-10 min-h-[420px] flex flex-col justify-end">
              {/* Logo */}
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logos/logo-location.svg" alt="Jet Rider — Location jet-ski" className="h-10 sm:h-12 w-auto drop-shadow-lg" loading="lazy" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                Location jet-ski
                <br />
                <span className="text-[#36b4a3]">au Cap d&apos;Agde</span>
              </h3>

              <p className="text-sm text-gray-300 mb-6 max-w-sm drop-shadow-md leading-relaxed">
                Sea-Doo dernière génération, randonnées guidées,
                balades libres et sessions freestyle encadrées
                par des professionnels.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-[#36b4a3]">30+</div>
                  <div className="text-[10px] text-gray-500">jets</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-white">1h–1j</div>
                  <div className="text-[10px] text-gray-500">formules</div>
                </div>
                <div className="rounded-xl bg-black/40 border border-white/5 p-3 text-center nav-blur">
                  <div className="text-lg font-bold text-white">⭐ 4.8</div>
                  <div className="text-[10px] text-gray-500">Google</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full bg-[#36b4a3]/10 border border-[#36b4a3]/20 px-3 py-1 text-[10px] text-[#36b4a3] font-medium">Randonnées guidées</span>
                <span className="rounded-full bg-[#36b4a3]/10 border border-[#36b4a3]/20 px-3 py-1 text-[10px] text-[#36b4a3] font-medium">Balades libres</span>
                <span className="rounded-full bg-[#36b4a3]/10 border border-[#36b4a3]/20 px-3 py-1 text-[10px] text-[#36b4a3] font-medium">Freestyle</span>
                <span className="rounded-full bg-[#36b4a3]/10 border border-[#36b4a3]/20 px-3 py-1 text-[10px] text-[#36b4a3] font-medium">Encadré</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href="https://locationjet.matosimport.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#36b4a3] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2ea393] transition-all active:scale-[0.98]">
                  Réserver
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <a href="tel:0467266662" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/30 nav-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all">
                  04 67 26 66 62
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
