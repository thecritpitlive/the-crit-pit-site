import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,md,json}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f5f6",
          100: "#e7e7ea",
          200: "#cfcfd5",
          300: "#b0b1b9",
          400: "#8a8c97",
          500: "#6d6f7b",
          600: "#565864",
          700: "#44454f",
          800: "#34353c",
          900: "#1f2025",
          950: "#121317"
        },
        parchment: {
          50: "#fdfcf9",
          100: "#f9f4ea",
          200: "#efe4c8",
          300: "#e4d3a6",
          400: "#d7bf81",
          500: "#c7aa59"
        },
        ember: {
          50: "#fff6ee",
          100: "#ffe6cf",
          200: "#fec399",
          300: "#fd9f63",
          400: "#fb7c2d",
          500: "#f86600",
          600: "#cc5200",
          700: "#9f3f00",
          800: "#732d00",
          900: "#471b00"
        },
        acid: {
          50: "#f0ffea",
          100: "#d9ffc6",
          200: "#b0ff86",
          300: "#8dfc54",
          400: "#6ef226",
          500: "#4fd000",
          600: "#3aa200",
          700: "#2a7700",
          800: "#1b4f00",
          900: "#0c2400"
        }
      },
      fontFamily: {
        display: ["'Anton'", "Impact", "system-ui", "sans-serif"],
        sans: ["'Outfit'", "Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        paper: "radial-gradient(#ffffff33 1px, transparent 1px)",
      },
      backgroundSize: {
        paper: "12px 12px"
      }
    },
  },
  plugins: [],
};

export default config;
