import type { Metadata } from "next";
import { Karla, Playfair_Display } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { faqs } from "@/content/faqs";
import { CookieConsentBanner } from "@/components/privacy/CookieConsentBanner";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { COOKIE_CONSENT_KEY } from "@/lib/consent";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lehsun.co.uk/"),
  title: "North Indian Catering in Kent | Lehsun",
  description:
    "Lehsun provides North Indian catering across Dartford, Gravesend, Ebbsfleet Valley, Bexley, Orpington and nearby Kent — real flavours like back home. Plus a daily menu for home orders.",
  alternates: {
    canonical: "https://lehsun.co.uk/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "North Indian catering Kent",
    "Indian catering Dartford",
    "Indian catering Gravesend",
    "Indian catering Bexley",
    "Indian catering Orpington",
    "North Indian catering Ebbsfleet Valley",
    "party catering Kent",
    "Diwali catering Kent",
    "daily Indian food Ebbsfleet Valley",
  ],
  openGraph: {
    title: "North Indian Catering in Kent | Lehsun",
    description:
      "Lehsun serves Dartford, Gravesend, Ebbsfleet Valley, Bexley, Orpington and nearby Kent with North Indian catering and daily menu orders.",
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

                    var analyticsConsent = 'granted';

                    try {
                      var storedConsent = window.localStorage.getItem(${JSON.stringify(COOKIE_CONSENT_KEY)});

                      if (storedConsent === 'granted' || storedConsent === 'denied') {
                        analyticsConsent = storedConsent;
                      }
                    } catch (error) {}

                    gtag('consent', 'default', { analytics_storage: analyticsConsent });
                    gtag('js', new Date());
                    gtag('config', ${JSON.stringify(gaMeasurementId)}, {
                      debug_mode: ${process.env.NODE_ENV !== "production"},
                      page_location: window.location.href,
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
        className={`${karla.variable} ${playfair.variable} font-body text-[#1A0600] bg-[#FDF8F0]`}
      >
        {children}
        <PageViewTracker />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
