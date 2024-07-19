import React from 'react'

const CustomApp = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-200'>
        <HotspotContainer/>
    </div>
  )
}

export default CustomApp

const Hotspot = ({ x, y, label }) => {
    return (
      <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
        <div className="w-4 h-4 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"></div>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white py-1 px-2 rounded-md shadow-lg">
          <p className="text-sm text-gray-800">{label}</p>
        </div>
      </div>
    );
  };
  
  const HotspotContainer = () => {
    return (
      <div className="relative w-full h-full">
        <img src="https://t4.ftcdn.net/jpg/02/80/92/99/360_F_280929926_PSeFKFMsoIkjCDUw0Q2RMpR3xwg9m541.jpg" alt="Image" className="w-full h-full" />
        <Hotspot x={50} y={50} label="Center Hotspot" />
        <Hotspot x={20} y={30} label="Top Left Hotspot" />
        <Hotspot x={80} y={70} label="Bottom Right Hotspot" />
      </div>
    );
  };
  