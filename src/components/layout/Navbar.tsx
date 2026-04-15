"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Concessionnaire", href: "/concessionnaire", external: false },
  { label: "Pièces & Accessoires", href: "https://www.matosimport.com/fr/parts/jet-ski", external: true },
  { label: "Occasions", href: "/#occasions", external: false },
  { label: "Location", href: "https://locationjet.matosimport.com", external: true },
  { label: "Services", href: "/services", external: false },
  { label: "Blog", href: "/blog", external: false },
  { label: "Contact", href: "/contact", external: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "nav-blur bg-black/80 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/logo-concession.svg"
                alt="Matos Import by Jeff"
                className="h-9 sm:h-11 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline text-sm font-medium text-gray-400 transition-colors hover:text-white inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover-underline text-sm font-medium text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center">
              {/* Mobile menu toggle */}
              <button
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:text-white hover:bg-white/10"
              >
                <div className="relative w-5 h-4">
                  <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${mobileOpen ? "top-[7px] rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 top-[7px] h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-5 opacity-100"}`} />
                  <span className={`absolute left-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full screen overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95 nav-blur" onClick={() => setMobileOpen(false)} />

        {/* Content */}
        <div className={`relative h-full flex flex-col pt-16 pb-8 px-6 overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-4"}`}>
          {/* Links */}
          <div className="flex-1 flex flex-col justify-center -mt-16">
            {NAV_LINKS.map((link, i) =>
              link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-2xl font-semibold text-white border-b border-white/5 transition-colors active:text-accent inline-flex items-center gap-2"
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
              </a>
              ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-2xl font-semibold text-white border-b border-white/5 transition-colors active:text-accent"
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.label}
              </Link>
              )
            )}
          </div>

          {/* Bottom info */}
          <div className="space-y-4 pt-8 border-t border-white/5">
            <a
              href="tel:0467265770"
              className="flex items-center gap-3 text-base font-medium text-white active:text-accent"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              04 67 26 57 70
            </a>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mar — Sam : 9h – 17h
            </div>
            <p className="text-xs text-gray-600">
              4 Parking du Temps Libre, Île des Loisirs, 34300 Agde
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
