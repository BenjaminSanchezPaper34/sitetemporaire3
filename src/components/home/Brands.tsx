"use client";

const BRANDS = [
  { name: "Sea-Doo", tagline: "Concessionnaire officiel", logo: "/logos/brands/seadoo.svg" },
  { name: "Yamaha", tagline: "Pièces adaptables", logo: "/logos/brands/yamaha.svg" },
  { name: "Kawasaki", tagline: "Pièces adaptables", logo: "/logos/brands/kawasaki.svg" },
  { name: "Riva Racing", tagline: "Performance", logo: "/logos/brands/riva-racing.svg" },
  { name: "Jobe", tagline: "Équipements", logo: "/logos/brands/jobe.svg" },
  { name: "SBT", tagline: "538 produits", logo: "/logos/brands/sbt.svg" },
  { name: "BRP", tagline: "Pièces d'origine", logo: "/logos/brands/brp.svg" },
  { name: "WSM", tagline: "512 produits", logo: "/logos/brands/wsm.svg" },
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
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-accent/20"
            >
              <div className="mb-3 flex h-10 w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="h-7 w-auto object-contain opacity-50 transition-all duration-300 group-hover:opacity-100"
                  loading="lazy"
                />
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
