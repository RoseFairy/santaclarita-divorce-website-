import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santaclaritadivorceattorney.com"),
  title: {
    default: "Santa Clarita Divorce Attorney | The F.M. Zavala Law Firm",
    template: "%s | Santa Clarita Divorce Attorney",
  },
  description: "Experienced Santa Clarita divorce attorney Francisco M. Zavala, Esq. provides strategic family law representation in Santa Clarita and throughout Los Angeles County. Serving Valencia, Canyon Country, Newhall, Stevenson Ranch, and Castaic with divorce, child custody, and high-asset property division.",
  keywords: [
    "Santa Clarita divorce attorney",
    "Santa Clarita divorce lawyer",
    "Santa Clarita family law attorney",
    "Los Angeles County divorce attorney",
    "Valencia CA divorce lawyer",
    "Canyon Country divorce attorney",
    "child custody attorney Santa Clarita",
    "high asset divorce Santa Clarita",
    "property division attorney Santa Clarita Valley",
  ],
  authors: [{ name: "The F.M. Zavala Law Firm" }],
  openGraph: {
    title: "Santa Clarita Divorce Attorney | The F.M. Zavala Law Firm",
    description: "Trusted Santa Clarita divorce attorney serving families in Santa Clarita and Los Angeles County. The F.M. Zavala Law Firm provides experienced representation in divorce, child custody, and complex property division matters.",
    images: [{ url: "/opengraph-image" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Attorney"],
      "@id": "https://santaclaritadivorceattorney.com/#attorney",
      "name": "Francisco M. Zavala, Esq.",
      "url": "https://santaclaritadivorceattorney.com",
      "telephone": "+16617533534",
      "email": "Divorce@santaclaritadivorceattorney.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "28494 Westinghouse Place Suite 205",
        "addressLocality": "Santa Clarita",
        "addressRegion": "CA",
        "postalCode": "91355",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Clarita" },
        { "@type": "City", "name": "Valencia" },
        { "@type": "City", "name": "Canyon Country" },
        { "@type": "City", "name": "Newhall" },
        { "@type": "City", "name": "Stevenson Ranch" },
        { "@type": "City", "name": "Castaic" },
        { "@type": "AdministrativeArea", "name": "Los Angeles County" }
      ],
      "hasMap": "https://maps.google.com/?q=28494+Westinghouse+Place+Suite+205+Santa+Clarita+CA+91355"
    },
    {
      "@type": "LegalService",
      "@id": "https://santaclaritadivorceattorney.com/#legalservice",
      "name": "The F.M. Zavala Law Firm",
      "url": "https://santaclaritadivorceattorney.com",
      "telephone": "+16617533534",
      "email": "Divorce@santaclaritadivorceattorney.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "28494 Westinghouse Place Suite 205",
        "addressLocality": "Santa Clarita",
        "addressRegion": "CA",
        "postalCode": "91355",
        "addressCountry": "US",
      },
      "image": "https://santaclaritadivorceattorney.com/opengraph-image",
      "hasMap": "https://maps.google.com/?q=28494+Westinghouse+Place+Suite+205+Santa+Clarita+CA+91355",
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Santa Clarita" },
        { "@type": "City", "name": "Valencia" },
        { "@type": "City", "name": "Canyon Country" },
        { "@type": "City", "name": "Newhall" },
        { "@type": "City", "name": "Stevenson Ranch" },
        { "@type": "City", "name": "Castaic" },
        { "@type": "AdministrativeArea", "name": "Santa Clarita Valley" },
        { "@type": "AdministrativeArea", "name": "Los Angeles County" }
      ],
      "description": "The F.M. Zavala Law Firm is a leading Santa Clarita divorce attorney practice providing experienced family law representation throughout Santa Clarita and Los Angeles County.",
      "provider": {
        "@id": "https://santaclaritadivorceattorney.com/#attorney",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Santa Clarita Family Law Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Divorce and Family Law Attorney",
              "description": "Comprehensive divorce and family law representation for clients in Santa Clarita and throughout Los Angeles County.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Child Custody",
              "description": "Child custody and visitation solutions focused on protecting the parent-child relationship in Santa Clarita and Los Angeles County courts.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spousal Support",
              "description": "Fair and sustainable spousal support arrangements tailored to the unique circumstances of each family in Santa Clarita.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-Asset Property Division",
              "description": "Strategic division of complex assets, businesses, real estate, and retirement accounts in high-net-worth divorces in Santa Clarita and Los Angeles County.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Domestic Violence",
              "description": "Representation in domestic violence restraining order matters and related family law proceedings in Santa Clarita courts.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Judgment Modifications",
              "description": "Post-judgment modifications to child custody, visitation, support, and other family court orders in Santa Clarita and Los Angeles County.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F4ED] text-[#2C2C2C]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
