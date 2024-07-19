import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <CharacterCounter/>
    </>
  )
}

export default CustomApp

const CharacterCounter = () => {
    const [msg,setMsg] = useState('');
    const maxLength = 100;

    const isMaxLengthReached = msg.length >= maxLength

    const handleChange = (e) => {
        const MessageLimit = e.target.value 
        if(MessageLimit.length <= maxLength){
            setMsg(MessageLimit)
        }
    }
    return(
        <>
         <textarea className='mb-5 resize-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' placeholder='type something....' value={msg} onChange={handleChange} id="" cols="30" rows="10"></textarea>
         <span className='bg-slate-400 font-bold rounded p-2'>
            {msg.length} \ {maxLength}
         </span>
         {isMaxLengthReached && (
            <span className="text-red-500">Maximum character limit reached</span>
         )}
        </>
    )
}