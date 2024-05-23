import React from "react";

// components
import Nav from "./Nav";

// images
import Logo from "../assets/img/logo.svg"

// constants
import { menuSidebar } from "../constants/constants";
import Sidebar from "./Sidebar";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="relative z-[9]">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <a href="/" className="flex items-center me-2">
            <Image src={Logo} alt="logo" className="sm:me-6" />
            <p className="hidden font-poppinsSB text-2xl font-bold text-secondary  dark:text-white lg:block">
              John Doe
            </p>
          </a>
          <div className="flex items-center lg:hidden">
            <Sidebar/>
          </div>
          <div className="hidden lg:block">
            <Nav menuSidebar={menuSidebar}/>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;