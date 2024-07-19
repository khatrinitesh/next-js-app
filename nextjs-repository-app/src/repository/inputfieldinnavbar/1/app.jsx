import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Navbar/>
    </>
  )
}

export default CustomApp

const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">My Logo</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Link 1</a>
            <a href="#" className="text-white hover:text-gray-300">Link 2</a>
            <a href="#" className="text-white hover:text-gray-300">Link 3</a>
          </div>
        </div>
      </nav>
    );
  };