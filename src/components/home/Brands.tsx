"use client";

const BRANDS = [
  { name: "Sea-Doo", logo: "/logos/brands/seadoo.svg" },
  { name: "Yamaha", logo: "/logos/brands/yamaha.svg" },
  { name: "Kawasaki", logo: "/logos/brands/kawasaki.svg" },
  { name: "Riva Racing", logo: "/logos/brands/riva-racing.svg" },
  { name: "Jobe", logo: "/logos/brands/jobe.svg" },
  { name: "SBT", logo: "/logos/brands/sbt.svg" },
  { name: "BRP", logo: "/logos/brands/brp.svg" },
  { name: "WSM", logo: "/logos/brands/wsm.svg" },
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
        <div data-reveal className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Nos marques
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Les leaders
            <br />
            <span className="text-gray-400">du jet-ski</span>
          </h2>
        </div>

        <div data-reveal className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="group flex items-center justify-center w-20 h-10 sm:w-28 sm:h-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                title={brand.name}
                className="max-h-full max-w-full object-contain opacity-40 transition-opacity duration-300 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
