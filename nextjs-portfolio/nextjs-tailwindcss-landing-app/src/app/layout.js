"use client"
// STYLING
import "./globals.css";
// COMPONENTS
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeToggle from "@/components/header/themeToggle";
import { metadata } from "@/components/metadata";

import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {

  const pathname = usePathname();

  const validRoutes = ['/','/about','/service','/portfolio','/contact'];
  return (
    <html lang="en">
      <body className="text-fsbase">
        <ThemeToggle/>
        <div className="flex flex-col min-h-screen bg-gray-500">
          {validRoutes.includes(pathname) && <Header/>}
          <div className="mainContent grow">{children}</div>
          {validRoutes.includes(pathname) && <Footer/>}
        </div>
      </body>
    </html>
  );
}
