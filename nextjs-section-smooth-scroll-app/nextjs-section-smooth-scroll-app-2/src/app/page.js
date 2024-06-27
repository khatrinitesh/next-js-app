"use client"
import Link from 'next/link';
import { Element, Link as ScrollLink } from 'react-scroll';
import About from './about/page';

export default function Home() {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
     <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <ScrollLink onSetActive={handleSetActive} passHref  to="home" className="nav-link py-[100px]"  spy={true}  smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink onSetActive={handleSetActive}  passHref to="about" spy={true} smooth={true} offset={50}  duration={500}>
              About
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <Element name="home">
        <div className="sectionSpacing">
          <h1>Welcome to Next.js with Smooth Scrolling!</h1>
          <p>Scroll down to see smooth scrolling in action.</p>
          {/* Content to make the page long enough for scrolling */}
        </div>
      </Element>
      <About/>
    </>
  );
}
