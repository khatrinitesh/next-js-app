"use client";
// NEXT with LINK / IMAGE
import Link from "next/link";
import Image from "next/image";
// NEXT/NAVIGATION
import { usePathname } from "next/navigation";
import Wallpaper1 from "../assets/images/logo.jpg";
import Wallpaper2 from "../assets/images/logo2.jpg";

const Header = () => {
  const activeHighlight = usePathname();
  const pathnamePage = usePathname();
  const ImageWallpaper = pathnamePage === "/" ? Wallpaper1 : Wallpaper2

  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
            <Link href="/">
            <Image  alt="Logo" className="w-[200px] h-[100px]" src={ImageWallpaper} />            
            </Link>
          <ul className="flex listBullet">
            <li>
              <Link
                className={`text-white block p-2 ${
                  activeHighlight === "/" ? "active" : ""
                }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`text-white block p-2 ${
                  activeHighlight === "/about" ? "active" : ""
                }`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`text-white block p-2 ${
                  activeHighlight === "/service" ? "active" : ""
                }`}
                href="/service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className={`text-white block p-2 ${
                  activeHighlight === "/contact" ? "active" : ""
                }`}
                href="/contact"
              >
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
