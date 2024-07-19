import React from 'react'

const CustomApp = () => {
  return (
    <>
        <FullHeightElement/>
    </>
  )
}

export default CustomApp

const FullHeightElement = () => {
    return (
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <h1 className="text-4xl text-center text-gray-800">Full Height Element</h1>
      </div>
    );
  };