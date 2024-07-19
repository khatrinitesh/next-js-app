import React from 'react';
import { FaStar } from 'react-icons/fa'; // Import the icon you want to use

const CustomApp = () => {
  return (
    <>
        <h1>Overlay Icon Example</h1>
        <Overlay />
    </>
  )
}

export default CustomApp

const Overlay = () => {
    return (
      <div className="relative">
        <img src="https://st3.depositphotos.com/1388768/37656/i/450/depositphotos_376566760-stock-photo-api-application-programming-interface-software.jpg" alt="Your image" className="w-full" />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-75 rounded-full p-3">
            <FaStar className="text-white text-xl" />
          </div>
        </div>
      </div>
    );
  };