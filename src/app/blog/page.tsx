import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Guides, conseils et actualités jet-ski",
  description: "Guides d'entretien, conseils d'achat, destinations et actualités du monde du jet-ski par Matos Import by Jeff, concessionnaire Sea-Doo au Cap d'Agde.",
};

export default function BlogPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-3 text-gray-400 max-w-xl">
            Guides d&apos;entretien, conseils d&apos;achat, destinations et actualités
            du monde du jet-ski.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-accent/90 px-3 py-1 text-[10px] font-semibold text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-6 flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                <h2 className="text-lg font-semibold text-white leading-snug mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                  Lire l&apos;article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
