import React from 'react'

const CustomApp = () => {
  return (
    <>
      <CenteredButton/>
    </>
  )
}

export default CustomApp

const CenteredButton = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Centered Button
        </button>
      </div>
    );
  };