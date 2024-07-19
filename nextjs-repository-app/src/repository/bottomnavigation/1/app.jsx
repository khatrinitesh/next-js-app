import React from 'react'

const CustomApp = () => {
  return (
    <>
      <BottomNavigation/>
    </>
  )
}

export default CustomApp

const BottomNavigation = () => {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-between p-4">
        <a href="#" className="flex items-center justify-center flex-1 p-2 hover:bg-gray-700">
          <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24">
            {/* Your icon for the first navigation item */}
            <path fill="currentColor" d="M3 3h18v2H3V3zM3 9h18v2H3V9zM3 15h18v2H3v-2z" />
          </svg>
          <span className="hidden sm:inline">Home</span>
        </a>
        <a href="#" className="flex items-center justify-center flex-1 p-2 hover:bg-gray-700">
          <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24">
            {/* Your icon for the second navigation item */}
            <path fill="currentColor" d="M3 3h18v2H3V3zM3 9h18v2H3V9zM3 15h18v2H3v-2z" />
          </svg>
          <span className="hidden sm:inline">Explore</span>
        </a>
        <a href="#" className="flex items-center justify-center flex-1 p-2 hover:bg-gray-700">
          <svg className="h-6 w-6 mr-1" viewBox="0 0 24 24">
            {/* Your icon for the third navigation item */}
            <path fill="currentColor" d="M3 3h18v2H3V3zM3 9h18v2H3V9zM3 15h18v2H3v-2z" />
          </svg>
          <span className="hidden sm:inline">Profile</span>
        </a>
      </nav>
    );
  }