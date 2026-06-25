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
        muted: "#71717a",
        blue: "#00c8d8",
        purple: "#2f2490",
        lavender: "#d8d0ff",
        pink: "#ead2ec",
      },
      boxShadow: {
        soft: "0 20px 54px rgba(115, 101, 188, 0.13)",
      },
    },
  },
  plugins: [],
} satisfies Config;
