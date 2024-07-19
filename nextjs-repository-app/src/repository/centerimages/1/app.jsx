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
      <div className="flex justify-center items-center h-screen">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710979200&semt=ais" alt="Centered Image" className="max-w-full max-h-full" />
      </div>
    );
  };