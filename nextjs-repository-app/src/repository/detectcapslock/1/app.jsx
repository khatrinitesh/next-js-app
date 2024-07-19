import React, { useEffect,useState } from 'react'

const CustomApp = () => {
    const isCapsLockOn = CustomComponent();

    const [inputVal,setInputval] = useState('');

    const handleChange = (e) => {
        setInputval(e.target.value)
    }
  return (
    <div>
        <input type="text" value={inputVal} onChange={handleChange} className='border border-red-500 outline-none rounded px-[20px] py-[5px]' />
        <br />
      {isCapsLockOn ? (
        <>caps lock is on</>
      ) : (
        <>caps lock is off</>
      )}
    </div>
  )
}

export default CustomApp

const CustomComponent = () => {
    const [isCapsLockOn, setIsCapsLockOn] = useState(false);

    useEffect(() => {
       const handleKeyPress = (e) => {
        setIsCapsLockOn(e.getModifierState('CapsLock'))
       }
       document.addEventListener('keydown',handleKeyPress)
       return () => {
        document.removeEventListener('keydown',handleKeyPress)
       }
    },[]);

    return isCapsLockOn
}
