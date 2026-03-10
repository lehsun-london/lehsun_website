import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f28c26",
        mustard: "#E6A21A",
        vermillion: "#D9381E",
        cream: "#F7E6D2",
        "off-white": "#FFF8F0",
        "background-light": "#FFF8F0",
        "background-dark": "#221910",
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
    },
  },
};

export default config;
