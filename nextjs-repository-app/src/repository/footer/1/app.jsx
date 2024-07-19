import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <Footer/>
    </>
  )
}

export default CustomApp

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isVisible,setIsVisible] = useState(true);
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {isVisible && currentYear} Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };