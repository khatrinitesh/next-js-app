"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";

const MainLayout = ({children}) => {

    const pathname = usePathname();
  console.log(pathname);
  const validRoutes = ["/", "/blog", "/uses", "/product","/contact"];
  const isValidRoute = validRoutes.includes(pathname) || pathname.startsWith("/product/");
  console.log(isValidRoute);
  return (
    <>
    <div className="container mx-auto flex flex-col min-h-screen">
            {isValidRoute && <Header />}
            <div className="mainContent grow py-5">{children}</div>
            {isValidRoute && <Footer />}
          </div>
          <ThemeToggle />
    </>
  )
}

export default MainLayout