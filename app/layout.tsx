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
    template: "%s | The F.M. Zavala Law Firm",
  },
  description: "Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — Real Licensed Attorney with 30 Years Experience, Former Los Angeles County Temporary Judge, UCLA Law. Direct Attorney Access — not handled by paralegals or staff. Serving Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County for divorce, high-asset, and child custody.",
  keywords: [
    "Santa Clarita Divorce Attorney",
    "Santa Clarita Divorce Lawyer",
    "Valencia Divorce Attorney",
    "Newhall Family Law Attorney",
    "Santa Clarita family law attorney",
    "Los Angeles County divorce attorney",
    "Valencia CA divorce lawyer",
    "Canyon Country divorce attorney",
    "child custody attorney Santa Clarita",
    "high asset divorce Santa Clarita",
    "property division attorney Santa Clarita Valley",
    "former judge divorce attorney Santa Clarita",
    "real attorney Santa Clarita",
    "direct attorney access Santa Clarita",
  ],
  authors: [{ name: "The F.M. Zavala Law Firm" }],
  openGraph: {
    title: "Santa Clarita Divorce Attorney | The F.M. Zavala Law Firm",
    description: "Real Licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. — 30 Years Experience, Former LA County Temporary Judge, UCLA Law. Direct Attorney Access (not paralegals) for clients in Santa Clarita, Valencia, Newhall, and Los Angeles County.",
    images: [{ url: "/opengraph-image" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DivorceAttorney",
      "@id": "https://santaclaritadivorceattorney.com/#attorney",
      "name": "Francisco M. Zavala, Esq.",
      "jobTitle": "Santa Clarita Divorce Attorney | Former Los Angeles County Temporary Judge",
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.4431",
          "longitude": "-118.5988"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Santa Clarita" },
        { "@type": "City", "name": "Valencia" },
        { "@type": "City", "name": "Newhall" },
        { "@type": "City", "name": "Canyon Country" },
        { "@type": "AdministrativeArea", "name": "Santa Clarita Valley" },
        { "@type": "AdministrativeArea", "name": "Los Angeles County" }
      ],
      "description": "Real Licensed Santa Clarita Divorce Attorney Francisco M. Zavala, Esq. with 30 years experience as a Former Los Angeles County Temporary Judge. Direct attorney representation — not handled by paralegals or staff — for families in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County.",
      "knowsAbout": [
        "Santa Clarita Divorce Attorney",
        "Valencia Divorce Attorney",
        "Newhall Family Law Attorney",
        "Divorce Law",
        "Child Custody",
        "Spousal Support",
        "High-Asset Property Division",
        "Move-Away Cases",
        "California Family Law"
      ],
      "image": "https://santaclaritadivorceattorney.com/opengraph-image",
      "hasMap": "https://maps.google.com/?q=28494+Westinghouse+Place+Suite+205+Santa+Clarita+CA+91355",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "UCLA School of Law"
      },
      "memberOf": [
        { "@type": "Organization", "name": "Los Angeles County Bar Association (Family Law Section)" },
        { "@type": "Organization", "name": "Santa Clarita Valley and Los Angeles County Bar Association" },
        { "@type": "Organization", "name": "American Bar Association (Family Law Section)" },
        { "@type": "Organization", "name": "California State Bar" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "J.D., UCLA School of Law (1996)" },
        { "@type": "EducationalOccupationalCredential", "name": "California Supreme Court (1996)" },
        { "@type": "EducationalOccupationalCredential", "name": "Former Los Angeles County Temporary Judge" }
      ],
      "worksFor": {
        "@id": "https://santaclaritadivorceattorney.com/#legalservice"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "5"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Elena M." },
          "reviewBody": "Francisco M. Zavala, Esq. handled my divorce with such professionalism and kindness. He helped me understand every step and fought for a fair outcome for my children and me. I am forever grateful."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Michael R." },
          "reviewBody": "I was terrified of losing time with my kids. Francisco M. Zavala, Esq. took the time to really listen and built a custody plan that the court accepted. My relationship with my children is stronger today because of his work."
        }
      ]
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "34.4431",
          "longitude": "-118.5988"
        }
      },
      "image": "https://santaclaritadivorceattorney.com/opengraph-image",
      "logo": "https://santaclaritadivorceattorney.com/opengraph-image",
      "hasMap": "https://maps.google.com/?q=28494+Westinghouse+Place+Suite+205+Santa+Clarita+CA+91355",
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$",
      "slogan": "Real Santa Clarita Divorce Attorney — 30 Years Experience, Former Judge, Direct Attorney Access",
      "description": "The F.M. Zavala Law Firm is the Santa Clarita Divorce Attorney practice led by real licensed attorney Francisco M. Zavala, Esq. (30 years, former LA County Temporary Judge, UCLA Law). Direct representation — never handled by paralegals or staff — for clients in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County.",
      "provider": {
        "@id": "https://santaclaritadivorceattorney.com/#attorney"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Santa Clarita Divorce Attorney Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Divorce Attorney",
              "description": "Comprehensive Santa Clarita Divorce Attorney representation for clients in Santa Clarita, Valencia, Newhall, Canyon Country, and Los Angeles County."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Child Custody",
              "description": "Santa Clarita Divorce Attorney child custody and visitation solutions focused on protecting the parent-child relationship in Santa Clarita, Valencia, Newhall, and Los Angeles County courts."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spousal Support",
              "description": "Fair and sustainable spousal support arrangements tailored to the unique circumstances of each family by Santa Clarita Divorce Attorney."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High-Asset Property Division",
              "description": "Strategic division of complex assets, businesses, real estate, and retirement accounts in high-net-worth divorces by Santa Clarita Divorce Attorney for families in Santa Clarita, Valencia, Newhall, and Los Angeles County."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Move-Away and Post-Judgment Modifications",
              "description": "Experienced Santa Clarita Divorce Attorney representation for move-away cases, post-judgment modifications, and enforcement in Santa Clarita and Los Angeles County courts."
            }
          }
        ]
      }
    }
  ]
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
