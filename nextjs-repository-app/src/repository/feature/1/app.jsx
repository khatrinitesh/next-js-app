import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
     <ToggleBtn/> 
    </>
  )
}

export default CustomApp

function ToggleBtn(){
    const [isOn,setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn)
    }
    return(
        <>
        <button className={`p-2 rounded ${isOn ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`} onClick={handleClick}>
            {isOn ? 'on' : 'off'}
        </button>
        </>
    )
}