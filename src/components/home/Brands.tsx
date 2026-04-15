"use client";

const BRANDS = [
  { name: "Sea-Doo", logo: "/logos/brands/seadoo.svg", needsInvert: true },
  { name: "Yamaha", logo: "/logos/brands/yamaha.svg", needsInvert: true },
  { name: "Kawasaki", logo: "/logos/brands/kawasaki.svg", needsInvert: true },
  { name: "Riva Racing", logo: "/logos/brands/riva-racing.svg", needsInvert: false },
  { name: "Jobe", logo: "/logos/brands/jobe.svg", needsInvert: false },
  { name: "SBT", logo: "/logos/brands/sbt.svg", needsInvert: false },
  { name: "BRP", logo: "/logos/brands/brp.svg", needsInvert: false },
  { name: "WSM", logo: "/logos/brands/wsm.svg", needsInvert: false },
];

const brandsJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Matos Import by Jeff",
  brand: BRANDS.map((b) => ({ "@type": "Brand", name: b.name })),
};

export default function Brands() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#08080a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Nos marques
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Les leaders du jet-ski
          </h2>
        </div>

        <div data-reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:gap-x-20">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                title={brand.name}
                className={`h-6 sm:h-7 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90 ${
                  brand.needsInvert
                    ? "brightness-0 invert opacity-30"
                    : "opacity-30"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
