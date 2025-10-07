import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/Navbar";
import { LeftNav } from "@/components/layout/LeftNav";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { translations } from "@/lib/i18n";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
});

const defaultLocale = "kz" as const;
const seoContent = translations[defaultLocale].seo;
const seoByLocale = {
  kz: translations.kz.seo,
  ru: translations.ru.seo,
  en: translations.en.seo,
};
const isProduction = process.env.NODE_ENV === "production";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.shortName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo.svg`,
  sameAs: [siteConfig.instagram, siteConfig.whatsapp],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer support",
    areaServed: "KZ",
    availableLanguage: ["Kazakh", "Russian", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "KZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: seoContent.title,
  description: seoContent.description,
  keywords: seoContent.keywords,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.shortName, url: siteConfig.siteUrl }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  category: "Youth Patriotic Program",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      [siteConfig.locale]: siteConfig.siteUrl,
      ...Object.entries(siteConfig.alternateLocales).reduce<Record<string, string>>((acc, [key, value]) => {
        acc[value] = `${siteConfig.siteUrl}/${key}`;
        return acc;
      }, {}),
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: Object.values(siteConfig.alternateLocales),
    url: siteConfig.siteUrl,
    title: seoContent.ogTitle,
    description: seoContent.ogDescription,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: seoContent.ogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoContent.ogTitle,
    description: seoContent.ogDescription,
    images: [siteConfig.ogImage],
    site: siteConfig.shortName,
    creator: siteConfig.shortName,
  },
  other: {
    "description:kk": seoByLocale.kz.description,
    "description:ru": seoByLocale.ru.description,
    "description:en": seoByLocale.en.description,
    "keywords:kk": seoByLocale.kz.keywords.join(", "),
    "keywords:ru": seoByLocale.ru.keywords.join(", "),
    "keywords:en": seoByLocale.en.keywords.join(", "),
    "og:title:kk": seoByLocale.kz.ogTitle,
    "og:title:ru": seoByLocale.ru.ogTitle,
    "og:title:en": seoByLocale.en.ogTitle,
    "og:description:kk": seoByLocale.kz.ogDescription,
    "og:description:ru": seoByLocale.ru.ogDescription,
    "og:description:en": seoByLocale.en.ogDescription,
    "language": "kk-KZ, ru-RU, en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} className={isProduction ? "is-production" : undefined}>
      <body className={`${montserrat.variable} ${oswald.variable} antialiased`}>
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <LeftNav />
          <div className="pt-16">{children}</div>
          <Footer />
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/77478584737"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed left-6 bottom-6 z-50 inline-flex items-center justify-center w-14 h-14 bg-[var(--cta-whatsapp)] text-white border border-[var(--cta-whatsapp-hover)] shadow-[0_15px_35px_rgba(0,160,54,0.45)] hover:bg-[var(--cta-whatsapp-hover)] transition-transform duration-200 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]"
            aria-label="Open WhatsApp"
          >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
          </a>
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
