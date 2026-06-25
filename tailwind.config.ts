import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#16171a",
        muted: "#686b73",
        blue: "#70c7ff",
        purple: "#8c7cff",
        lavender: "#d9ccff",
        pink: "#edc7ea",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(74, 93, 132, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
