
"use client"
import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomApp from '../reference/repository/fullscreennavigation/1/page';
import '../style.css';


const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const btnHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true)
      }
      else{
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <header className={`header bg-[black] p-[10px] relative ${isSticky === true ? 'sticky' : ''}`}>

      <ul className='flex'>
        <li>
          <Link href="/" className={pathname ===  '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname ===  '/about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link href="/service" className={pathname ===  '/service' ? 'active' : ''}>Service</Link>
        </li> 
        <li>
          <Link href="/contact" className={pathname ===  '/contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
        <button className={`btnHamburger ${isMenuOpen === true ? 'active' : ''}`} onClick={btnHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <CustomApp isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </header>
  )
}

export default Header
