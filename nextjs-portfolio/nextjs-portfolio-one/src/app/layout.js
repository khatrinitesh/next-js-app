"use client";
import Header from "@/components/Header";
import "../style/globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  const validRoutes = ["/", "/blog", "/uses", "/product","/contact"];
  const isValidRoute = validRoutes.includes(pathname) || pathname.startsWith("/product/");
  console.log(isValidRoute);

  return (
    <>
      <html lang="en">
        <body className="dark:bg-primaryD bg-secondaryL">
          <div className="container mx-auto flex flex-col min-h-screen">
            {isValidRoute && <Header />}
            <div className="mainContent grow py-5">{children}</div>
            {isValidRoute && <Footer />}
          </div>
          <ThemeToggle />
        </body>
      </html>
    </>
  );
}
