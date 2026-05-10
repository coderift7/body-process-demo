import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://body-process.de";
const shouldIndex =
  !siteUrl.includes("github.io") && !siteUrl.includes("localhost");

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [
    "Personal Training Hadamar",
    "Personal Trainer Limburg",
    "Personal Training Diez",
    "Ernährungscoaching Limburg",
    "Fitness Coaching für Selbstständige",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: siteConfig.company.name,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
  },
  robots: {
    index: shouldIndex,
    follow: shouldIndex,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lexend.variable} ${sourceSans.variable}`}>
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="format-detection" content="telephone=yes" />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: siteConfig.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: siteConfig.company.legalName,
              description: siteConfig.meta.description,
              url: siteUrl,
              telephone: siteConfig.company.phone,
              email: siteConfig.company.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mainzer Landstraße 54",
                addressLocality: "Hadamar",
                postalCode: "65589",
                addressCountry: "DE",
              },
              areaServed: [
                { "@type": "City", name: "Hadamar" },
                { "@type": "City", name: "Limburg an der Lahn" },
                { "@type": "City", name: "Diez" },
              ],
              founder: {
                "@type": "Person",
                name: "Justin Doms",
              },
              review: siteConfig.testimonials.map((testimonial) => ({
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: testimonial.rating,
                  bestRating: 5,
                },
                author: {
                  "@type": "Person",
                  name: testimonial.name,
                },
                reviewBody: testimonial.text,
              })),
              makesOffer: siteConfig.services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cta focus:px-4 focus:py-2 focus:text-white">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
