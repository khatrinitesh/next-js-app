import React from 'react'

const Footer = () => {
    const getCurrentYear = new Date().getFullYear();
  return (
    <footer className="p-2 bg-black text-white">
        <p>Copyright &copy; {getCurrentYear}</p>
    </footer>
  )
}

export default Footer