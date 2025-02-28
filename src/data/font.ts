import { Nunito, Poppins } from "next/font/google";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-nunito", // 👈 Add a CSS variable
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-poppins", // 👈 Add a CSS variable
});
