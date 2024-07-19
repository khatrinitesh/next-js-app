import React from 'react'

const CustomApp = () => {
  return (
    <>
        <CenteredImage/>
    </>
  )
}

export default CustomApp

const CenteredImage = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <img src="https://www.theknowledgeacademy.com/_files/images/History_of_MS_Excel_and_its_evolution.png" alt="Centered Image" className="max-w-full max-h-full" />
      </div>
    );
  };