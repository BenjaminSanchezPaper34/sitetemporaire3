"use client";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#08080a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[400px]">

          {/* Background photo — showroom */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/concession/showroom.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="relative z-10 p-10 lg:p-20 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
              Besoin d&apos;un conseil&nbsp;?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed drop-shadow-md">
              Notre équipe d&apos;experts est à votre disposition du mardi au samedi.
              33 ans d&apos;expérience au service de votre jet-ski.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0467265770"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover active:scale-[0.98] shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                04 67 26 57 70
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/30 nav-blur px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                Nous écrire
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-gray-400 drop-shadow-sm">
              <span className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Cap d&apos;Agde — Île des Loisirs
              </span>
              <span>Mar — Sam : 9h – 17h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
