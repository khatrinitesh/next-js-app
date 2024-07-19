import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const CustomApp = () => {
  return (
    <>
     <Navigation />
      <div id="home" className="h-screen p-[50px] bg-gray-200">Home</div>
      <div id="about" className="h-screen p-[50px] bg-blue-200">About</div>
      <div id="services" className="h-screen p-[50px] bg-green-200">Services</div>
      <div id="contact" className="h-screen p-[50px] bg-red-200">Contact</div>
    </>
  )
}

export default CustomApp

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll('section');
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between z-10">
        <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`hover:text-yellow-300 cursor-pointer ${activeSection === 'home' ? 'font-bold' : ''}`}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`hover:text-yellow-300 cursor-pointer ${activeSection === 'about' ? 'font-bold' : ''}`}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`hover:text-yellow-300 cursor-pointer ${activeSection === 'services' ? 'font-bold' : ''}`}
      >
        Services
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className={`hover:text-yellow-300 cursor-pointer ${activeSection === 'contact' ? 'font-bold' : ''}`}
      >
        Contact
      </Link>
      </nav>
    );
  };
  
