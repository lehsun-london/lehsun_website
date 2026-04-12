import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Actual Lehsun brand palette — from /assets/brand/ and /assets/generated/
        "brand-red":    "#D93423",  // primary brand, jali-wave background
        "brand-teal":   "#03B6AA",  // logo outer ring
        "brand-purple": "#993786",  // spice-burst circles
        "brand-gold":   "#E69B39",  // sunburst, dot accents
        "brand-orange": "#E8540A",  // logo middle ring
        "brand-cream":  "#F1E1AA",  // brand cream
        // Semantic
        background: "#FDF8F0",
        foreground: "#1A0600",
        cream:      "#FFF4E0",
        border:     "#EAD6A8",
      },
      fontFamily: {
        body:  ["var(--font-body)", "Karla", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
    },
  },
};

export default config;
