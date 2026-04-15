"use client";

const BRANDS = [
  { name: "Sea-Doo", tagline: "Concessionnaire officiel", logo: "/logos/brands/seadoo.svg", needsInvert: true },
  { name: "Yamaha", tagline: "Pièces adaptables", logo: "/logos/brands/yamaha.svg", needsInvert: true },
  { name: "Kawasaki", tagline: "Pièces adaptables", logo: "/logos/brands/kawasaki.svg", needsInvert: true },
  { name: "Riva Racing", tagline: "Performance", logo: "/logos/brands/riva-racing.svg", needsInvert: false },
  { name: "Jobe", tagline: "Équipements", logo: "/logos/brands/jobe.svg", needsInvert: false },
  { name: "SBT", tagline: "Pièces moteur", logo: "/logos/brands/sbt.svg", needsInvert: false },
  { name: "BRP", tagline: "Pièces d'origine", logo: "/logos/brands/brp.svg", needsInvert: false },
  { name: "WSM", tagline: "Pièces PWC", logo: "/logos/brands/wsm.svg", needsInvert: false },
];

// JSON-LD for SEO — tells Google we're an authorized dealer for these brands
const brandsJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Matos Import by Jeff",
  brand: BRANDS.map((b) => ({
    "@type": "Brand",
    name: b.name,
  })),
};

export default function Brands() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#08080a]">
      {/* Schema.org brands for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsJsonLd) }}
      />

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
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10"
            >
              <div className="mb-3 flex h-10 w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={`${brand.name} — ${brand.tagline}`}
                  title={`${brand.name} — ${brand.tagline}`}
                  className={`h-7 w-auto max-w-[110px] object-contain transition-all duration-300 group-hover:opacity-100 ${
                    brand.needsInvert
                      ? "brightness-0 invert opacity-50"
                      : "opacity-50"
                  }`}
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-gray-600 transition-colors group-hover:text-gray-400">
                {brand.tagline}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
