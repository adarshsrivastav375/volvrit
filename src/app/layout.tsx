import type { Metadata } from "next";
import "./globals.css";

import { Bricolage_Grotesque } from "next/font/google";

const raleway = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import InterativeLink from "@/components/common/InterativeLink";
import ClientScripts from "@/components/common/ClientScripts";

export const metadata: Metadata = {
  title: "Volvrit",
  description: "Innovation and Development Environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ClientScripts />
      </head>
      <body className={`relative ${raleway.className}`}>
        <Navbar />
        <div className="min-h-screen">
          <main>{children}</main>
          <InterativeLink />
        </div>
        <Footer />
        <div id="modal-root"></div>
        <ToastContainer
          rtl={false}
          autoClose={2000}
          newestOnTop={true}
          position="bottom-right"
          hideProgressBar={false}
        />
      </body>
    </html>
  );
}
