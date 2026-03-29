import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { faqs } from "@/content/faqs";
import { CookieConsentBanner } from "@/components/privacy/CookieConsentBanner";
import { COOKIE_CONSENT_KEY } from "@/lib/consent";
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
  metadataBase: new URL("https://lehsun.co.uk/"),
  title: "North Indian Catering in Dartford & Ebbsfleet Valley | Lehsun",
  description:
    "Based in Ebbsfleet Valley, Lehsun provides North Indian catering for parties, gatherings and events across Dartford, Gravesend, Northfleet and nearby Kent, with real flavours like back home.",
  alternates: {
    canonical: "https://lehsun.co.uk/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "North Indian catering Ebbsfleet Valley",
    "Indian catering Dartford",
    "Indian catering Gravesend",
    "event catering Northfleet",
    "party catering Dartford",
    "North Indian catering Kent",
    "North Indian food Ebbsfleet Valley",
    "real North Indian flavours Kent",
  ],
  openGraph: {
    title: "North Indian Catering in Dartford & Ebbsfleet Valley | Lehsun",
    description:
      "Based in Ebbsfleet Valley, Lehsun serves Dartford, Gravesend, Northfleet and nearby Kent with North Indian catering and real flavours like back home.",
    url: "https://lehsun.co.uk/",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lehsun.co.uk/#website",
  url: "https://lehsun.co.uk/",
  name: "Lehsun",
  description:
    "Based in Ebbsfleet Valley, Lehsun provides North Indian catering across Dartford, Gravesend, Northfleet and nearby Kent, with real flavours like back home.",
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {gaMeasurementId ? (
          <>
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
                  (function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;

                    var analyticsConsent = 'denied';

                    try {
                      var storedConsent = window.localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)});

                      if (storedConsent === 'granted' || storedConsent === 'denied') {
                        analyticsConsent = storedConsent;
                      }
                    } catch (error) {}

                    gtag('consent', 'default', { analytics_storage: analyticsConsent });
                    gtag('js', new Date());
                    gtag('config', ${JSON.stringify(gaMeasurementId)}, {
                      page_path: window.location.pathname,
                    });
                  })();
                `,
              }}
            />
          </>
        ) : null}
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
