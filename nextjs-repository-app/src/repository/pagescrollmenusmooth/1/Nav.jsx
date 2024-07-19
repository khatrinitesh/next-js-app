import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <>
     <nav>
      <ul>
        <li>
          <Link
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
        <li>
          <Link
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
      </ul>
    </nav>
    </>
  )
}

export default Nav