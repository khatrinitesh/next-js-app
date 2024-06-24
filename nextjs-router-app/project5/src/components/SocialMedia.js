"use client"
import Link from "next/link";
import {useState} from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
    const [tooltip, setTooltip] = useState(null);

    const handleMouseEnter = (icon) => {
        setTooltip(icon); // Set hovered icon to show its tooltip
      };
    
      const handleMouseLeave = () => {
        setTooltip(null); // Clear tooltip when mouse leaves icon
      };
  return (
    <>
 <ul className="social-icons flex gap-4">
      <li>
        <Link href="https://twitter.com" target="_blank" onMouseEnter={() => handleMouseEnter('twitter')}
          onMouseLeave={handleMouseLeave}
>
          <FaTwitter />
        </Link>
        {tooltip === 'twitter' && <div className="tooltip">Twitter</div>}
      </li>
      <li>
        <Link href="https://linkedin.com" target="_blank" onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
>
          <FaLinkedin />
        </Link>
        {tooltip === 'linkedin' && <div className="tooltip">Linkedin</div>}
      </li>
      <li>
        <Link href="https://facebook.com" target="_blank" onMouseEnter={() => handleMouseEnter('facebook')}
          onMouseLeave={handleMouseLeave}
>
          <FaFacebook />
        </Link>
        {tooltip === 'facebook' && <div className="tooltip">Facebook</div>}
      </li>
    </ul>
    </>
  )
}

export default SocialMedia