"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogArticle() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Article introuvable</h1>
        <Link href="/blog" className="text-accent hover:underline">Retour au blog</Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="pt-20 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-400 truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-semibold text-accent mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>•</span>
            <span>{post.readTime} de lecture</span>
            <span>•</span>
            <span>Par Matos Import</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content — markdown-like rendering */}
        <div className="prose-custom">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <div key={i} className="h-4" />;
            if (trimmed.startsWith("## "))
              return <h2 key={i} className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4">{trimmed.replace("## ", "")}</h2>;
            if (trimmed.startsWith("### "))
              return <h3 key={i} className="text-lg font-semibold text-white mt-6 mb-2">{trimmed.replace("### ", "")}</h3>;
            if (trimmed.startsWith("**") && trimmed.endsWith("**"))
              return <p key={i} className="text-sm font-semibold text-gold mt-4 mb-1">{trimmed.replace(/\*\*/g, "")}</p>;
            if (trimmed.startsWith("- "))
              return <li key={i} className="text-sm text-gray-400 leading-relaxed ml-4 list-disc">{trimmed.replace("- ", "")}</li>;
            if (trimmed.startsWith("| ")) {
              // Table row
              const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
              if (cells.every((c) => c.match(/^-+$/))) return null; // separator
              return (
                <div key={i} className="grid grid-cols-2 gap-4 text-sm border-b border-white/5 py-2">
                  {cells.map((cell, j) => (
                    <span key={j} className={j === 0 ? "text-gray-300 font-medium" : "text-gray-500"}>{cell}</span>
                  ))}
                </div>
              );
            }
            return <p key={i} className="text-sm text-gray-400 leading-relaxed mb-3">{trimmed}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-accent/5 p-8 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Besoin de pièces ou d&apos;un conseil ?</h3>
          <p className="text-sm text-gray-400 mb-4">Notre atelier est ouvert du mardi au samedi, 9h-17h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pieces-detachees"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all"
            >
              Voir nos pièces
            </Link>
            <a
              href="tel:0467265770"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              04 67 26 57 70
            </a>
          </div>
        </div>

        {/* Related articles */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-white mb-6">À lire aussi</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/10"
                >
                  <div className="h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-gray-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-accent font-medium">{p.category}</span>
                    <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-accent transition-colors line-clamp-2 mt-0.5">
                      {p.title}
                    </h4>
                    <span className="text-[10px] text-gray-600 mt-1 block">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
