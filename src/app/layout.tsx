import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { ScrollObserver } from "@/components/ScrollObserver";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lehsun | Authentic Indian Catering in London",
  description:
    "Lehsun offers authentic Indian catering in London for private events, festivals, corporate occasions, and community celebrations.",
  metadataBase: new URL("https://lehsun.vercel.app"),
  openGraph: {
    title: "Lehsun | Authentic Indian Catering in London",
    description:
      "Nostalgic Indian cuisine for private events, festivals, and celebrations across London.",
    images: ["/assets/brand/logo-full.svg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
        <ScrollObserver />
      </body>
    </html>
  );
}
