import React from 'react'
import SocialMedia from './SocialMedia';

const Footer = () => {

    const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black text-white p-3">
      <div className="container mx-auto">
        <div className="innerFooter flex justify-between">
          <p>&copy; {currentFullYear}</p>
          <SocialMedia/>
        </div>
        </div>
    </footer>
  )
}

export default Footer