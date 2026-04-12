import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF5E4",
        foreground: "#2F160D",
        muted: {
          foreground: "#6B564C",
        },
        // Brand palette — sourced from Lehsun printed menu identity
        saffron: "#F5821F",
        vermillion: "#D9381E",
        teal: "#2E8B7A",
        purple: "#7B3399",
        gold: "#E6A21A",
        cream: "#FFF5E4",
        brown: "#2F160D",
        // Legacy aliases (kept for backward compat during migration)
        primary: "#F5821F",
        mustard: "#E6A21A",
        "off-white": "#FFF5E4",
        "background-light": "#FFF5E4",
        "background-dark": "#2F160D",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      backgroundImage: {
        "tile-pattern": "var(--tile-pattern-url)",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
};

export default config;
