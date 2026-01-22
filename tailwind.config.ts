import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 Configuration
 *
 * In Tailwind v4, most configuration is done via CSS using @theme directives.
 * This file is kept minimal - only content paths and features that can't be
 * configured via CSS are defined here.
 *
 * All colors, spacing, fonts, etc. are defined in globals.css using:
 * - :root { } for CSS variables
 * - @theme inline { } for Tailwind utility class generation
 *
 * This approach enables:
 * 1. Full compatibility with tweakcn.com themes
 * 2. Database-driven theme customization
 * 3. Easy theme swapping without rebuilding
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@opensite/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      // Animations can't be defined via CSS @theme, so they stay here
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
