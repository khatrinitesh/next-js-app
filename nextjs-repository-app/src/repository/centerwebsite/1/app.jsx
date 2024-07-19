import React from 'react'

const CustomApp = () => {
  return (
    <>
     <CenterLay>
     <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg">This is the center of the universe!</p>
      </div>
    </CenterLay> 
    </>
  )
}

export default CustomApp

const CenterLay = ({children}) => {
    return(
        <>
        <div className='flex justify-center items-center h-screen'>
            {children}
        </div>
        </>
    )
}
