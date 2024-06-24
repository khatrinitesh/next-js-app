"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo1 from "../assets/images/fauget.jpg";
import Logo2 from "../assets/images/huawei.jpg";


const Header = () => {

  
const pathname = usePathname();
const homepage = pathname === '/';

  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <Link href="/">
            {homepage ? (<> <Image src={Logo1} className="imgFluid h-[100px] w-[100px] object-cover"/></>) : (<> <Image src={Logo2} className="imgFluid h-[100px]  w-[100px] object-cover"/></>)}
          </Link>
        <ul className="flex listNav">
          <li>
            <Link className={`text-white p-2 block ${pathname === "/"  ? 'active' : ''}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`text-white p-2 block ${pathname === "/about"  ? 'active' : ''}`} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={`text-white p-2 block ${pathname === "/service"  ? 'active' : ''}`} href="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className={`text-white p-2 block ${pathname === "/contact"  ? 'active' : ''}`} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        </div> 
      </div>
    </header>
  );
};

export default Header;
