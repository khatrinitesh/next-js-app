import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
      <NumericChecker/>
    </>
  )
}

export default CustomApp


const NumericChecker = () => {
    const [inputVal,setInputVal] = useState('');
    const [isNumeric,setIsnumeric] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value 
        setInputVal(value)
        setIsnumeric(/^\d+$/.test(value))
    }
    return(
        <>
         <input type="text" onChange={handleChange} value={inputVal} placeholder='type something...' />
         {isNumeric ? (<><p className='text-green-500 mt-2'>The value is numeric</p></>) : (<><p className='text-red-500 mt-2'>The value is not numeric</p></>)}
        </>
    )
}