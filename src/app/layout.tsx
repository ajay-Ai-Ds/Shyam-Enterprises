import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shyam Enterprises | Safety Nets & Invisible Grills Bangalore",
  description:
    "Shyam Enterprises offers professional balcony safety nets, child safety netting, pigeon protection nets, anti-bird spikes, invisible grills, and ceiling cloth hangers in Bangalore, Karnataka. Premium quality and fast installation.",
  keywords: [
    "Safety Nets Bangalore",
    "Invisible Grills Bangalore",
    "Balcony Safety Nets Bangalore",
    "Pigeon Safety Nets Bangalore",
    "Window Invisible Grills Bangalore",
    "Ceiling Cloth Hangers Bangalore",
    "Anti Bird Spikes Bangalore",
    "Shyam Enterprises Bangalore",
  ],
  metadataBase: new URL("https://www.shyaminvisiblegrills.com"),
  verification: {
    google: "sxBWfisev7KdCvC-tTgSvXcK8pizCa5U-tnWHB-SUhE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shyam Enterprises | Premium Safety Nets & Invisible Grills Bangalore",
    description:
      "Expert safety netting and modern invisible grill installation in Bangalore. Rest assured with safety nets built for high durability and style.",
    url: "https://www.shyaminvisiblegrills.com",
    siteName: "Shyam Enterprises",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Shyam Enterprises Safety Nets & Invisible Grills Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Enterprises | Premium Safety Nets & Invisible Grills Bangalore",
    description:
      "Premium safety nets and invisible grill installers in Bangalore, Karnataka.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema with Schema.org standards
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.shyaminvisiblegrills.com/#localbusiness",
    "name": "Shyam Enterprises",
    "url": "https://www.shyaminvisiblegrills.com",
    "telephone": "+91 95139 89222",
    "email": "info.shyaminvisiblegrills@gmail.com",
    "image": "https://www.shyaminvisiblegrills.com/images/og-image.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore Central",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Bangalore Metropolitan Region, Karnataka",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets & Invisible Grills Installation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcony Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Children Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pigeon Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Duct Area Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monkey Safety Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cricket Practice Nets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti-Bird Spikes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcony Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Children Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pet Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Staircase Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Invisible Grills" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceiling Cloth Hangers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcony Cloth Hangers" } },
      ],
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shyam Enterprises",
    "url": "https://www.shyaminvisiblegrills.com",
    "logo": "https://www.shyaminvisiblegrills.com/images/logo/shyam-logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95139-89222",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Kannada", "Hindi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="sxBWfisev7KdCvC-tTgSvXcK8pizCa5U-tnWHB-SUhE" />
        {/* Schema markup script injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics 4 (GA4) - Standard script for GSC Verification */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZCYPR2V24D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZCYPR2V24D');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[90px] xl:pt-[98px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
