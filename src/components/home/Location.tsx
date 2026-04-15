"use client";

export default function Location() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="relative rounded-3xl border border-white/10 overflow-hidden min-h-[500px] lg:min-h-[450px]">

          {/* Video background — desktop */}
          <video
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            autoPlay muted loop playsInline preload="metadata"
            poster="/videos/poster-location.jpg"
          >
            <source src="/videos/location-desktop.mp4" type="video/mp4" />
          </video>

          {/* Video background — mobile */}
          <video
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            autoPlay muted loop playsInline preload="metadata"
            poster="/videos/poster-location.jpg"
          >
            <source src="/videos/location-mobile.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay — strong enough for text readability */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:p-16 items-center">
            {/* Left — Content */}
            <div>
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/logo-location.svg"
                  alt="Matos Import Location — Jet Rider"
                  className="h-11 sm:h-14 w-auto drop-shadow-lg"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl mb-4 drop-shadow-lg">
                Envie de piloter&nbsp;? <span className="text-[#36b4a3]">Louez votre jet-ski</span>
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-sm sm:text-base drop-shadow-md">
                Découvrez nos Sea-Doo dernière génération en location au Cap d&apos;Agde.
                Randonnées guidées, balades libres et sessions freestyle
                encadrées par des professionnels.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://locationjet.matosimport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#36b4a3] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2ea393] active:scale-[0.98] shadow-lg"
                >
                  Réserver une location
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href="tel:0467266662"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 nav-blur"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  04 67 26 66 62
                </a>
              </div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 nav-blur">
                <div className="text-2xl font-bold text-[#36b4a3] mb-1">Sea-Doo</div>
                <p className="text-xs text-gray-400">Flotte dernière génération</p>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 nav-blur">
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <p className="text-xs text-gray-400">Jet-skis disponibles</p>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 nav-blur">
                <div className="text-2xl font-bold text-white mb-1">1h — 1j</div>
                <p className="text-xs text-gray-400">Formules flexibles</p>
              </div>
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 nav-blur">
                <div className="text-2xl font-bold text-white mb-1">⭐ 4.8</div>
                <p className="text-xs text-gray-400">Note clients Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
