"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import { FaFacebook, FaTwitter, FaInstagram, FaTwitterSquare  } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <nav className="social">
        <ul>
          <li>
            <Link target="_blank" href="https://twitter.com/ibrahim_jabbari">
              Twitter <FaFacebook  />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.instagram.com/ibrahim_jabbari/">
              Instagram <FaInstagram />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="#">
              Google+ <FaTwitterSquare  />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.facebook.com/IbrahimJabbariBlog/">
              Facebook <FaFacebook />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CustomApp;
