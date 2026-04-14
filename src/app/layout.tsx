import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/layout/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matos Import by Jeff — Concessionnaire Sea-Doo & Pièces Jet-Ski",
    template: "%s | Matos Import by Jeff",
  },
  description:
    "Leader européen depuis 1991. Concessionnaire officiel Sea-Doo, pièces détachées jet-ski toutes marques, atelier spécialisé au Cap d'Agde.",
  keywords: [
    "jet ski",
    "pièces détachées jet ski",
    "Sea-Doo",
    "concessionnaire Sea-Doo",
    "Cap d'Agde",
    "Matos Import",
    "scooter des mers",
    "Yamaha",
    "Kawasaki",
  ],
  openGraph: {
    title: "Matos Import by Jeff — Concessionnaire Sea-Doo & Pièces Jet-Ski",
    description:
      "Leader européen depuis 1991. Concessionnaire officiel Sea-Doo, pièces détachées jet-ski toutes marques.",
    url: "https://www.matosimport.com",
    siteName: "Matos Import by Jeff",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-black text-white font-sans">
        <LenisProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
