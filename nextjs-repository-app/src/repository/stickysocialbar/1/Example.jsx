import React, { useState, useEffect } from "react";
import { FaFacebook,FaSquareTwitter,FaInstagram,FaLinkedin   } from "react-icons/fa6";

// import "./style.css";

const Example = () => {

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-center items-center">
        <a
          href="#"
          className="text-white mx-2 hover:text-gray-400 transition duration-300"
        >
          <FaFacebook/>
        </a>
        <a
          href="#"
          className="text-white mx-2 hover:text-gray-400 transition duration-300"
        >
          <FaSquareTwitter/>
        </a>
        <a
          href="#"
          className="text-white mx-2 hover:text-gray-400 transition duration-300"
        >
          <FaInstagram/>
        </a>
        <a
          href="#"
          className="text-white mx-2 hover:text-gray-400 transition duration-300"
        >
          <FaLinkedin/>
        </a>
      </div>
    </>
  );
};

export default Example;
