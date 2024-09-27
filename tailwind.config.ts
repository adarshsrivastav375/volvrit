import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      maxWidth: {
        "8xl": "124rem", // 1984 px
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
