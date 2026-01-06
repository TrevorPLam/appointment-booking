import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          primary: "#4b63ff",
          secondary: "#111b34",
          accent: "#f6b756",
          muted: "#f1f4ff",
        },
      },
      borderRadius: {
        xl: "1.5rem",
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(23, 43, 77, 0.35)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "var(--font-sans)", "sans-serif"],
        body: ["'General Sans'", "var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
