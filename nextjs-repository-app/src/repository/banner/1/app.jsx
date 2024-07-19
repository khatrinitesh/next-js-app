import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
       <h1 className="text-2xl font-semibold mb-4">My Website</h1>
      <Banner text="Welcome to our website!" color="blue" />
      <Banner text="Limited time offer - 50% off!" color="green" />
      <Banner text="Hurry up! Offer ends soon." color="red" />
    </>
  )
}

export default CustomApp

const Banner = ({ text, color }) => {
    return (
      <div className={`bg-${color}-500 text-white py-4 px-6 text-center`}>
        <p>{text}</p>
      </div>
    );
  };