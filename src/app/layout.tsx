import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";





export const metadata: Metadata = {
  title: "ThinkBuilt Solutions",
  description: "ThinkBuilt Solutions Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        {children}
       
      </body>
    </html>
  );
}
