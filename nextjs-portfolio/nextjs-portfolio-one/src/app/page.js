"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import IntroPage from "./intro/page";
 
export default function Home() {

  const pathname = usePathname();
  console.log(pathname);
  const validRoutes = ["/", "/blog", "/uses", "/product","/contact"];
  const isValidRoute = validRoutes.includes(pathname) || pathname.startsWith("/product/");
  console.log(isValidRoute);

  return (
    <>
     <div className="container mx-auto flex flex-col min-h-screen">
            {isValidRoute && <Header />}
            <div className="mainContent grow py-5">
              <IntroPage/>
            </div>
            {isValidRoute && <Footer />}
          </div>
          <ThemeToggle />
          </>
  )
}