<<<<<<< HEAD
"use client"

import { FaHome, FaSearch, FaUser, FaBars } from 'react-icons/fa';
import './style.css';
import { usePathname } from 'next/navigation';

const CustomApp = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <>
      <div className="icon-bar flex">
      <a href="/" className={pathname === '/asdsd' ? 'active' : ''}>
          <FaHome />
      </a>
      <a href="/about" className={pathname === '/about' ? 'active' : ''}>
          <FaSearch />
      </a>
      <a href="/profile" className={pathname === '/profile' ? 'active' : ''}>
          <FaUser />
      </a>
      <a href="/menu" className={pathname === '/menu' ? 'active' : ''}>
          <FaBars />
      </a>
    </div>
    </>
  )
}

export default CustomApp
=======
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomApp = () => {
  return (
    <>
      <IconBar />
    </>
  );
};

export default CustomApp;

const IconBar = () => {
  return (
    <>
      <div className="flex space-x-4 bg-[purple] text-white clear-both">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faTwitter} className="w-[20px] text-[white]" />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FontAwesomeIcon icon={faFacebook} className="w-[20px] text-[white]" />
        </a>
        <a href="#" className="text-purple-500 hover:text-purple-700">
          <FontAwesomeIcon icon={faInstagram} className="w-[20px] text-[white]" />
        </a>
      </div>
    </>
  );
};
>>>>>>> 9186162d5538f4aacb32618d960d5df46bcb2a02
