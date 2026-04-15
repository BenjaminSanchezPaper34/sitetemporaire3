"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32 bg-[#08080a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
              Blog
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Nos actualités
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Guides, conseils et actualités du monde du jet-ski
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 shrink-0"
          >
            Tous les articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div data-reveal data-reveal-stagger="true" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-accent/90 px-3 py-1 text-[10px] font-semibold text-white">
                    {post.category}
                  </span>
                </div>
                {i === 0 && (
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-gold/90 px-3 py-1 text-[10px] font-semibold text-black">
                      Nouveau
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 flex-1">
                <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent">
                  Lire l&apos;article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
