import React from 'react'

const CustomApp = () => {

    const handleClick  =() => {
        alert('button clicked')
    }
  return (
    <>
    <ClaymorphismCard>
        <ClaymorphismButton text="click me" onClick={handleClick}/>
    </ClaymorphismCard> 
    </>
  )
}

export default CustomApp

const ClaymorphismButton  = ({text,onClick}) => {
    return(
        <>
            <button onClick={onClick} className='bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
                {text}
            </button>
        </>
    )
}

const ClaymorphismCard = ({children}) => {
    return(
        <>
         <div className='bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out'>
            {children}
         </div>
        </>
    )
}