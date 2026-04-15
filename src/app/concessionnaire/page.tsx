import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concessionnaire Sea-Doo officiel — Cap d'Agde",
  description: "Matos Import by Jeff, concessionnaire officiel Sea-Doo depuis 1991 au Cap d'Agde. Vente de jet-skis neufs et occasion, pièces détachées, atelier spécialisé.",
};

const GAMME = [
  { model: "Spark", desc: "Entrée de gamme fun et accessible", price: "À partir de 7 490 €", image: "/images/jets/spark-trixx.png", power: "60-90 ch" },
  { model: "GTX Limited 300", desc: "Touring premium — confort et performance", price: "À partir de 21 500 €", image: "/images/jets/gtx-300.png", power: "300 ch" },
  { model: "RXT-X 325", desc: "La référence performance / compétition", price: "À partir de 27 990 €", image: "/images/jets/rxt-325.png", power: "325 ch" },
];

export default function ConcessionnairePage() {
  return (
    <div className="pt-20 pb-24">
      {/* Hero concession */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/concession/batiment.jpg" alt="Concession Matos Import by Jeff" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-12">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Concessionnaire</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            Concessionnaire officiel
            <br />
            <span className="text-accent">Sea-Doo</span> depuis 1991
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        {/* Intro */}
        <div className="max-w-3xl mb-20">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Matos Import by Jeff est le <strong className="text-white">leader européen</strong> dans la distribution
            de pièces détachées pour jet-ski, et <strong className="text-white">concessionnaire officiel Sea-Doo</strong> au Cap d&apos;Agde.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Depuis plus de 33 ans, notre équipe passionnée accompagne les propriétaires de jet-skis :
            vente de machines neuves et d&apos;occasion, pièces détachées pour toutes marques,
            atelier de réparation spécialisé, et service de gardiennage.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.matosimport.com/fr/parts/jet-ski" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all active:scale-[0.98]">
              Accéder à la boutique
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
            </a>
            <a href="tel:0467265770"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all">
              04 67 26 57 70
            </a>
          </div>
        </div>

        {/* Hommage Jeff */}
        <div className="mb-20 relative rounded-3xl border border-gold/10 bg-gradient-to-br from-[#0d0d0f] via-[#111114] to-[#0d0d0f] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Photo */}
            <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/concession/jeff.jpg"
                alt="Jeff — Fondateur de Matos Import"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
            </div>

            {/* Text */}
            <div className="lg:col-span-3 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-gold text-xs font-medium uppercase tracking-wider mb-4 block">
                L&apos;histoire derrière le nom
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                &laquo;&nbsp;by Jeff&nbsp;&raquo;
              </h2>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  Jeff, c&apos;est l&apos;homme qui a tout commencé. En 1991, il fonde Matos Import
                  au Cap d&apos;Agde avec une passion dévorante pour le jet-ski et une vision simple :
                  offrir aux pilotes les meilleures pièces, le meilleur service, et un accueil humain.
                </p>
                <p>
                  Pendant plus de trois décennies, Jeff a bâti bien plus qu&apos;une entreprise.
                  Il a créé une référence européenne, un lieu où chaque passionné se sentait chez lui.
                  Son expertise, sa générosité et son sourire ont marqué des milliers de clients
                  devenus des amis.
                </p>
                <p className="text-gray-300 font-medium">
                  Aujourd&apos;hui, Jeff nous a quittés — mais son esprit vit dans chaque pièce
                  que nous vendons, chaque jet que nous réparons, chaque client que nous accueillons.
                  Le &laquo;&nbsp;by Jeff&nbsp;&raquo; n&apos;est pas un simple nom.
                  C&apos;est une promesse&nbsp;: perpétuer son héritage avec la même passion
                  et la même exigence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gamme Sea-Doo */}
        <div className="mb-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Gamme Sea-Doo</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-10">
            Des machines pour chaque pilote
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {GAMME.map((jet) => (
              <div key={jet.model} className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-accent/20 hover:-translate-y-1">
                <div className="h-32 flex items-center justify-center mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={jet.image} alt={`Sea-Doo ${jet.model}`} className="h-full w-auto object-contain drop-shadow-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Sea-Doo {jet.model}</h3>
                <p className="text-xs text-gray-500 mb-2">{jet.power} • {jet.desc}</p>
                <span className="text-sm font-semibold text-accent">{jet.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chiffres */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { value: "1991", label: "Année de création" },
            { value: "38 000+", label: "Références en stock" },
            { value: "60+", label: "Marques distribuées" },
            { value: "N°1", label: "Distributeur européen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Showroom */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/concession/showroom.jpg" alt="Showroom Matos Import" className="w-full h-[300px] sm:h-[400px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center p-10 lg:p-16">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg">Visitez notre showroom</h2>
              <p className="text-sm text-gray-300 drop-shadow-md mb-4">
                Venez découvrir les derniers modèles Sea-Doo en exposition, essayez les équipements,
                et bénéficiez des conseils de notre équipe.
              </p>
              <p className="text-sm text-gray-400">
                📍 4 Parking du Temps Libre, Île des Loisirs, 34300 Agde<br />
                🕘 Mar — Sam : 9h – 17h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
