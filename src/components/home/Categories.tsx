"use client";

const CATEGORIES = [
  {
    name: "Moteur",
    description: "Pistons, joints, segments, compresseurs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    count: "4 200+",
  },
  {
    name: "Transmission",
    description: "Arbres, hélices, turbines, roulements",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    count: "3 800+",
  },
  {
    name: "Électricité",
    description: "Stators, bobines, capteurs, démarreurs",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    count: "2 500+",
  },
  {
    name: "Câbles",
    description: "Direction, accélérateur, tilt, trim",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
    count: "1 900+",
  },
  {
    name: "Carburation",
    description: "Gicleurs, carburateurs, pompes, filtres",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      </svg>
    ),
    count: "2 100+",
  },
  {
    name: "Coque & Habillage",
    description: "Tapis, plaques, écopes, autocollants",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
    count: "3 200+",
  },
];

export default function Categories() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
            Catalogue
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pièces détachées
            <br />
            <span className="text-gray-400">par catégorie</span>
          </h2>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href={`/pieces-detachees/${cat.name.toLowerCase()}`}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                {cat.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-600">
                  {cat.count} références
                </span>
                <svg
                  className="text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-gold"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div data-reveal data-reveal-delay="0.3" className="mt-12 text-center">
          <a
            href="/pieces-detachees"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
          >
            Voir tout le catalogue
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
