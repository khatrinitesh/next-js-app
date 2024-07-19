import React from 'react'

const CustomApp = () => {
  return (
    <>
        <HorizontalScrollMenu/>
    </>
  )
}

export default CustomApp

const HorizontalScrollMenu = () => {
    return (
      <div className="flex overflow-x-auto bg-gray-200 p-4">
        {/* Menu items */}
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 1</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 2</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 3</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 4</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 5</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 6</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 7</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 8</a>
        <a href="#" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-md mr-4">Menu Item 9</a>
      </div>
    );
  };