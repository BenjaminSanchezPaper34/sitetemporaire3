"use client";

export default function Location() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="relative rounded-3xl border border-white/10 overflow-hidden">
          {/* Background gradient — turquoise tint to match location brand */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#36b4a3]/10 via-black to-accent/5" />
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#36b4a3]/15 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 gap-8 p-10 lg:grid-cols-2 lg:p-16 items-center">
            {/* Left — Content */}
            <div>
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/logo-location.svg"
                  alt="Matos Import Location — Jet Rider"
                  className="h-10 w-auto"
                />
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl mb-4">
                Envie de piloter&nbsp;?
                <br />
                <span className="text-[#36b4a3]">Louez votre jet-ski</span>
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Découvrez nos Sea-Doo dernière génération en location au Cap d&apos;Agde.
                Randonnées guidées, balades libres et sessions freestyle
                encadrées par des professionnels.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://locationjet.matosimport.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#36b4a3] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2ea393] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Réserver une location
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href="tel:0467266662"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  04 67 26 66 62
                </a>
              </div>
            </div>

            {/* Right — Features grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <div className="text-2xl font-bold text-[#36b4a3] mb-1">Sea-Doo</div>
                <p className="text-xs text-gray-500">Flotte dernière génération</p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <p className="text-xs text-gray-500">Jet-skis disponibles</p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <div className="text-2xl font-bold text-white mb-1">1h — 1j</div>
                <p className="text-xs text-gray-500">Formules flexibles</p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                <div className="text-2xl font-bold text-white mb-1">⭐ 4.8</div>
                <p className="text-xs text-gray-500">Note clients Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
