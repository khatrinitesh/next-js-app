import React, { useState } from 'react';

const CustomApp = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked)
    }
  return (
    <div>
        <label className='cursor-pointer'>
      <input type="checkbox" onChange={handleToggle} checked={isChecked} className="form-checkbox text-indigo-600 h-5 w-5" />
      <span className="text-gray-700">Check me!</span>
      </label>
      
      <div className='mt-4'>
        {isChecked ? (<p className='text-green-500'>Checkbox is checked</p>) : (<p className='text-red-500'>Checkbox is unchecked</p>)}
      </div>
    </div>
  )
}

export default CustomApp
