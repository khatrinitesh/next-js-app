import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white p-2">
      <div className="container mx-auto">
        <p className="desc">
            &copy; Copyright {currentYear}
        </p>
        </div>
    </footer>
  )
}

export default Footer