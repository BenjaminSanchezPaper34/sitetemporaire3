"use client";

const BRAND_NAMES = ["Sea-Doo", "Yamaha", "Kawasaki", "Riva Racing", "Jobe", "SBT", "BRP", "WSM"];

const brandsJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Matos Import by Jeff",
  brand: BRAND_NAMES.map((name) => ({ "@type": "Brand", name })),
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

        <div data-reveal className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/brands/all-brands.svg"
            alt="Marques distribuées : Sea-Doo, Yamaha, Kawasaki, Riva Racing, Jobe, SBT, BRP, WSM"
            title="Nos marques partenaires"
            className="w-full max-w-3xl h-auto opacity-40 hover:opacity-70 transition-opacity duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
