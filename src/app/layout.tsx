import type { Metadata } from "next";
import { Karla, Playfair_Display } from "next/font/google";
import Script from "next/script";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { CookieConsentBanner } from "@/components/privacy/CookieConsentBanner";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { COOKIE_CONSENT_KEY } from "@/lib/consent";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_ALTERNATE_NAMES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
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
  metadataBase: new URL(`${SITE_URL}/`),
  title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
  description:
    "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers and festive events across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent. Daily menu available for local DA10 collection and nearby delivery.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "North Indian catering Ebbsfleet",
    "Indian catering Dartford",
    "Indian catering Gravesend",
    "North Indian catering Ebbsfleet Valley",
    "birthday catering Dartford",
    "housewarming catering Gravesend",
    "baby shower catering Ebbsfleet",
    "Diwali catering Kent",
    "North Indian catering Kent",
  ],
  openGraph: {
    title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
    description:
      "Proper North Indian catering for birthdays, housewarmings, baby showers and festive events across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent.",
    url: `${SITE_URL}/`,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Indian Catering in Ebbsfleet, Dartford & Gravesend | Lehsun",
    description:
      "Lehsun provides North Indian catering for birthdays, housewarmings, baby showers and festive events across Ebbsfleet Valley, Dartford, Gravesend and nearby Kent.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lehsun.co.uk/#website",
  url: "https://lehsun.co.uk/",
  name: SITE_NAME,
  alternateName: SITE_ALTERNATE_NAMES,
  description:
    "Based in Ebbsfleet Valley, Lehsun provides North Indian catering across Ebbsfleet, Dartford, Gravesend, Northfleet and nearby Kent, with real flavours like back home.",
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
