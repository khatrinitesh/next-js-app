import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './style.css';

const CustomApp = () => {
  return(
    <>
    <NavigationApp/>
    <section id="section1" className="py-[100px] flex justify-center items-center h-screen bg-gray-500">
        <h1 className="text-white text-[100px] font-bold">Section 1</h1>
    </section>
    <section id="section2" className="py-[100px] flex justify-center items-center h-screen bg-gray-200">
        <h1 className="text-white text-[100px] font-bold">Section 2</h1>
    </section>
    </>
  )
}
export default CustomApp;

const NavigationApp = () => {
    const [activeSection, setActiveSection] = useState([]);
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200; // Add an offset if needed
  
        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
  
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-4">
        <ul className="flex navbar justify-center">
          <li className={activeSection === 'section1'? 'active' : ''}>
            <Link className="cursor-pointer"
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 1
            </Link>
          </li>
          <li className={activeSection === 'section2' ? 'active' : ''}>
            <Link className="cursor-pointer"
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    );
};