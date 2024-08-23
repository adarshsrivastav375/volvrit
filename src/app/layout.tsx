import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/component/commonlayout/Navbar";
import Footer from "@/component/commonlayout/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
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
