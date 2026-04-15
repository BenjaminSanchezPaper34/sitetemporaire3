import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Matos Import by Jeff — Concessionnaire Sea-Doo & Pièces Jet-Ski",
    template: "%s | Matos Import by Jeff",
  },
  description:
    "Leader européen depuis 1991. Concessionnaire officiel Sea-Doo au Cap d'Agde. Pièces détachées jet-ski toutes marques, équipements, atelier spécialisé. Plus de 38 000 références.",
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
    "pièces Sea-Doo",
    "hélice jet ski",
    "entretien jet ski",
    "réparation jet ski",
  ],
  authors: [{ name: "Matos Import by Jeff" }],
  creator: "Paper34",
  publisher: "Matos Import by Jeff",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://www.matosimport.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matos Import by Jeff — Concessionnaire Sea-Doo & Pièces Jet-Ski",
    description:
      "Leader européen depuis 1991. Concessionnaire officiel Sea-Doo, pièces détachées jet-ski toutes marques au Cap d'Agde.",
    url: "https://www.matosimport.com",
    siteName: "Matos Import by Jeff",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Matos Import by Jeff — Concessionnaire Sea-Doo au Cap d'Agde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matos Import by Jeff — Pièces Jet-Ski",
    description: "Concessionnaire Sea-Doo, 38 000+ pièces détachées jet-ski. Cap d'Agde.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Matos Import by Jeff",
  description:
    "Concessionnaire officiel Sea-Doo et leader européen de la distribution de pièces détachées pour jet-ski depuis 1991.",
  url: "https://www.matosimport.com",
  telephone: "+33467265770",
  email: "matosimportbyjeff.34@gmail.com",
  foundingDate: "1991",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Parking du Temps Libre, Île des Loisirs",
    addressLocality: "Agde",
    postalCode: "34300",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.277,
    longitude: 3.501,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  brand: {
    "@type": "Brand",
    name: "Sea-Doo",
  },
  sameAs: [
    "https://www.instagram.com/matos.importbyjeff/",
    "https://www.facebook.com/matosimportbyjeff/",
    "https://www.tiktok.com/@matosimportbyjeff",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} antialiased`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100svh] flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
