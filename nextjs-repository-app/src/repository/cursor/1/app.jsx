import React from 'react'

const CustomApp = () => {
  return (
    <>
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cursor Image Example</h1>
      <div className="relative">
        <img
          src="https://png.pngtree.com/png-clipart/20231006/original/pngtree-funny-cursor-with-eyes-png-image_13128072.png"
          alt="Image"
          className="w-full rounded-lg"
          style={{ cursor: 'zoom-in' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">Click to Zoom</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default CustomApp
