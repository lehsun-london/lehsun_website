import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  title: "Lehsun | Authentic Flavors, Modern Soul",
  description: "Authentic regional Indian cuisine by Lehsun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      <body className={`${inter.variable} ${playfair.variable} bg-[#F7E6D2] text-slate-900 font-display`}>{children}</body>
    </html>
  );
}
