import type { Metadata } from "next";
import "./globals.css";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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
                  "display": ["Inter", "sans-serif"],
                  "serif": ["Playfair Display", "serif"]
                },
                borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
              },
            },
          }`,
          }}
        />
      </head>
      <body className="bg-[#F7E6D2] text-slate-900 font-display">{children}</body>
    </html>
  );
}
