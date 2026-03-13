import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
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
  metadataBase: new URL("https://www.lehsun.co.uk/"),
  title:
    "Authentic North Indian Catering in Dartford, Ebbsfleet Valley | Lehsun",
  description:
    "Authentic North Indian catering in Dartford, Ebbsfleet Valley, Gravesend, Orpington, Swanley and Bexley. Private parties & corporate events. Flavours like you remember. Nostalgia in every bite.",
  alternates: {
    canonical: "https://www.lehsun.co.uk/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "North Indian catering Dartford",
    "catering Ebbsfleet Valley",
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
      "Catering in Dartford, Ebbsfleet Valley, Gravesend and nearby areas. Authentic North Indian flavour for private parties & corporate events.",
    url: "https://www.lehsun.co.uk/",
    type: "website",
  },
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
        text: "Yes, we provide North Indian catering across Dartford and surrounding areas for private parties and corporate events.",
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
        text: "We provide catering across Dartford, Ebbsfleet Valley, Gravesend, Orpington, Swanley, Bexley and nearby Kent areas.",
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
    <html lang="en" suppressHydrationWarning>
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
        <LocalBusinessSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
