import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <AnimatedBtn text="button primary"/>
    </>
  )
}

export default CustomApp

const AnimatedBtn = ({text}) => {
    const [isHovered,setIsHovered]  = useState(false);

    return(
        <>
         <button
            className={`relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ${
                isHovered ? 'shadow-md' : 'shadow-sm'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >{text}</button>
            {isHovered && (
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-25 rounded transition-opacity duration-300"></span>
            )}
        </>
    )
}
