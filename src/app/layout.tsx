import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { CookieConsentBanner } from "@/components/privacy/CookieConsentBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lehsun.co.uk"),
  title: "Lehsun | North Indian Catering in Ebbsfleet Valley, Dartford & Kent",
  description:
    "Authentic North Indian catering in Ebbsfleet Valley, Dartford, Gravesend, Orpington, Swanley and Bexley. Private parties & corporate events (15+ guests). Flavours like you remember. Nostalgia in every bite.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "North Indian catering Ebbsfleet",
    "catering Dartford",
    "Indian catering Gravesend",
    "catering Orpington",
    "catering Swanley",
    "catering Bexley",
    "party catering Kent",
    "corporate catering Kent",
  ],
  openGraph: {
    title: "Lehsun – North Indian Catering in Kent",
    description:
      "Catering in Ebbsfleet Valley, Dartford, Gravesend and nearby areas. Authentic North Indian flavour for private parties & corporate events (15+ guests).",
    url: "https://www.lehsun.co.uk",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CateringService",
  name: "Lehsun – Nostalgic North Indian Catering",
  url: "https://www.lehsun.co.uk",
  telephone: "+44 7768 892652",
  address: {
    "@type": "PostalAddress",
    streetAddress: "28 Portbridge Gardens",
    addressLocality: "Ebbsfleet Valley",
    postalCode: "DA10 1GG",
    addressCountry: "GB",
  },
  areaServed: [
    "Ebbsfleet",
    "Dartford",
    "Gravesend",
    "Orpington",
    "Swanley",
    "Bexley",
  ],
  servesCuisine: "North Indian",
  priceRange: "££",
  sameAs: ["https://maps.app.goo.gl/1geULoG9J3w9qzJ89"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide catering services in Dartford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide North Indian catering across Dartford and surrounding areas for private parties and corporate events (15+ guests).",
      },
    },
    {
      "@type": "Question",
      name: "Are you based in Ebbsfleet Valley, Kent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Lehsun – Nostalgic North Indian Catering is based in Ebbsfleet Valley (DA10 1GG) and regularly caters events locally.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide catering across Ebbsfleet Valley, Dartford, Gravesend, Orpington, Swanley, Bexley and nearby Kent areas.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ??
    process.env.NEXT_PUBLIC_GA_ID ??
    "G-8C5C76904J";

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', { analytics_storage: 'denied' });
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                anonymize_ip: true,
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <meta
          content="9dqrbpv17sgdpcfsu64476lzrmnsbx"
          name="facebook-domain-verification"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                colors: {
                  "primary": "#f28c26",
                  "mustard": "#E6A21A",
                  "vermillion": "#D9381E",
                  "cream": "#F7E6D2",
                  "off-white": "#FFF8F0",
                  "background-light": "#FFF8F0",
                  "background-dark": "#221910",
                },
                fontFamily: {
                  "display": ["var(--font-display)", "sans-serif"],
                  "serif": ["var(--font-serif)", "serif"]
                },
                borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
              },
            },
          }`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#F7E6D2] text-slate-900 font-display`}
      >
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
