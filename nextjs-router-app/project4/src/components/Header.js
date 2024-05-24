"use client"
import Image from "next/image";
import Link from "next/link";

// images
import Logo from "../assets/images/logo.jpg";
import LogoBrand from "../assets/images/logobrand.jpg";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

  return (
    <>
    <header className="relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center"> 
          <Link href="/">
              {isHomePage ? (
                <Image src={Logo} alt="Logo" width={100} height={100} className="aspect-w-16 aspect-h-9" />
              ) : (
                <Image src={LogoBrand} alt="Brand Logo" width={100} height={100} className="aspect-w-16 aspect-h-9" />
              )}
          </Link>
          <div className="block lg:hidden">
     <Sidebar/>
     </div>
          <ul className="lg:flex bg-black hidden ">
            <li>
              <Link className={`text-white p-3 block ${pathname === '/' ? 'bg-[red] active' : ''}`} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={`text-white p-3 block ${pathname === '/about' ? 'bg-[red] active' : ''}`} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={`text-white p-3 block ${pathname === '/productlist' ? 'bg-[red] active' : ''}`} href="/productlist">
                Product List
              </Link>
            </li>
            <li>
              <Link className={`text-white p-3 block ${pathname === '/services' ? 'bg-[red] active' : ''}`} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={`text-white p-3 block ${pathname === '/contact' ? 'bg-[red] active' : ''}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    
    </>
    
  );
};

export default Header;
