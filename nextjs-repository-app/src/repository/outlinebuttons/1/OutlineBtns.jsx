import React from 'react'

const OutlineBtns = ({children,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='bg-transparent border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded inline-flex items-center'>{children}</button>
        
    </div>
  )
}

export default OutlineBtns