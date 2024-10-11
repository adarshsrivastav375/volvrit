import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        marqueeSm: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        marqueeSm: "marquee 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#344080",
      },
      boxShadow: {
        corner:
          "rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
      dropShadow: {
        "4xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "8xl": "124rem", // 1984 px
        "9xl": "2560px", // for screens between 2K and 4K
        "10xl": "3840px", // for 4K screens
      },
      screens: {
        "3xl": "1920px", // for screens like 1080p monitors
        "4xl": "2560px", // for screens between 2K and 4K
        "5xl": "3840px", // for 4K screens
      },
    },
  },
  plugins: [],
};
export default config;
