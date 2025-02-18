import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/explore";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agentia World",
  icons: {
    icon: [
      { url: "/robotImage.webp", sizes: "16x16" },
      { url: "/robotImage.webp", sizes: "32x32" },
      { url: "/robotImage.webp", sizes: "96x96" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased max-w-7xl container mx-auto bg-black`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
