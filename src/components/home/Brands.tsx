"use client";

const BRANDS = [
  { name: "Sea-Doo", tagline: "Concessionnaire officiel" },
  { name: "Yamaha", tagline: "Pièces adaptables" },
  { name: "Kawasaki", tagline: "Pièces adaptables" },
  { name: "Riva Racing", tagline: "Performance" },
  { name: "Jobe", tagline: "Équipements" },
  { name: "Jet Pilot", tagline: "Accessoires" },
  { name: "SBT", tagline: "538 produits" },
  { name: "BRP", tagline: "Pièces d'origine" },
];

export default function Brands() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#08080a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Nos marques
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Les leaders du jet-ski
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Distributeur officiel et partenaire des plus grandes marques
            de l&apos;industrie nautique.
          </p>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BRANDS.map((brand) => (
            <a
              key={brand.name}
              href={`/marques/${brand.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-gold/20"
            >
              <div className="mb-3 flex h-16 w-full items-center justify-center">
                <span className="text-xl font-bold text-gray-400 transition-colors group-hover:text-white">
                  {brand.name}
                </span>
              </div>
              <span className="text-xs text-gray-600 transition-colors group-hover:text-gray-400">
                {brand.tagline}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
