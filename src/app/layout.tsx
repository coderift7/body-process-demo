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

const siteUrl = "https://coderift7.github.io/body-process-demo";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
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
    index: false,
    follow: false,
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
              url: "https://body-process.de",
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
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
