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
    "North Indian Catering in Dartford & Ebbsfleet Valley | Lehsun",
  description:
    "Lehsun provides North Indian catering in Dartford and Ebbsfleet Valley for birthdays, house parties and corporate events. Authentic flavours, delivery, setup and event catering for 15 to 300 guests.",
  alternates: {
    canonical: "https://www.lehsun.co.uk/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "North Indian catering Dartford",
    "Indian catering Ebbsfleet Valley",
    "party catering Dartford",
    "corporate catering Dartford",
    "birthday catering Dartford",
    "Indian party catering Kent",
    "North Indian catering Kent",
    "event catering Ebbsfleet Valley",
  ],
  openGraph: {
    title: "North Indian Catering in Dartford & Ebbsfleet Valley | Lehsun",
    description:
      "North Indian catering for birthdays, family events and corporate gatherings in Dartford and Ebbsfleet Valley.",
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
      name: "Do you provide North Indian catering in Dartford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide North Indian catering across Dartford and surrounding areas for private parties and corporate events.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cater private parties in Ebbsfleet Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Lehsun – Nostalgic North Indian Catering is based in Ebbsfleet Valley (DA10 1GG) and regularly caters events locally.",
      },
    },
    {
      "@type": "Question",
      name: "What types of events do you cater?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cater birthdays, family gatherings, festive celebrations, house parties and corporate events, typically for 15 to 300 guests.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.lehsun.co.uk/#website",
  url: "https://www.lehsun.co.uk/",
  name: "Lehsun",
  description:
    "North Indian catering in Dartford and Ebbsfleet Valley for private parties and corporate events.",
  inLanguage: "en-GB",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
