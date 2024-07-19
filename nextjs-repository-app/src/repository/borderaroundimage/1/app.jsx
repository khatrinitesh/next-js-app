import React from 'react'

const CustomApp = () => {
  return (
    <>
      <ImageWithBorder src="https://i.pinimg.com/originals/98/ca/97/98ca978b5caae38cb7a66ad3d3bd5372.jpg" alt="Your image alt text" />
    </>
  )
}

export default CustomApp

const ImageWithBorder = ({ src, alt }) => {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={src} alt={alt} className="border-[10px] border-gray-500 rounded" />
      </div>
    );
};
