import React, { useState, useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
     <FadeInComp/> 
    </>
  )
}

export default CustomApp

const FadeInComp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    },[])
    return(
        <>
        <div className={`transition-opacity duration-1000  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
             {/* Content to fade in */}
             <h1 className='text-4xl'>Welcome</h1>
             <p className="text-lg">This content fades in</p>
        </div>
        </>
    )
}
