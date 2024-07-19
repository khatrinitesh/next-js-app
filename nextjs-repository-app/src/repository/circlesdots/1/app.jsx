import React from 'react'

const CustomApp = () => {
  return (
    <>
      <CirclesDots count={10}/>
    </>
  )
}

export default CustomApp

const CirclesDots = ({count}) => {
    // generate an array of numbers from 1 to count 
    const dots = [...Array(count).keys()];

    return(
        <>
        <div className="flex items-center justify-center">
            {dots.map((_,index) => (
                <div key={index} className='w-4 h-4 bg-gray-500 rounded-full mx-1'></div>
            ))}
        </div>
        </>
    )
}
