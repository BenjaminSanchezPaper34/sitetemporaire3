"use client";

const REVIEWS = [
  {
    name: "Davis P.",
    rating: 5,
    text: "Excellente boutique, des pièces de qualité et un service client au top. Livraison rapide et soignée.",
    source: "Google",
  },
  {
    name: "Florine P.",
    rating: 5,
    text: "Très bon magasin, conseils professionnels et équipe passionnée. Je recommande vivement pour tout propriétaire de jet-ski.",
    source: "Google",
  },
  {
    name: "Valentin J.",
    rating: 5,
    text: "Commande reçue rapidement, pièces conformes et de qualité. Le site est pratique pour trouver les pièces par modèle.",
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">
            Avis clients
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <Stars count={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-600">{review.source}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
