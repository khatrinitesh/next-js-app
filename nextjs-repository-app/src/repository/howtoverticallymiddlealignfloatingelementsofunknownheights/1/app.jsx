import React from 'react'

const CustomApp = () => {
  return (
    <>
     <div className="flex items-center justify-center h-screen">
      {/* Floating elements */}
      <div className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">Element 1</div>
      <div className="bg-red-500 text-white px-4 py-2 rounded-md mx-2">Element 2</div>
      <div className="bg-green-500 text-white px-4 py-2 rounded-md mx-2">Element 3</div>
    </div> 
    </>
  )
}

export default CustomApp
