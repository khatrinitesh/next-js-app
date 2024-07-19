import React from 'react';

const ColorPreference = ({ setThemeColor }) => {
    const handleColorChange = (color) => {
      setThemeColor(color);
    };
  
    return (
      <div>
        <h2 className='text-white'>Color Preference</h2>
        <div>
          <button className="bg-blue-500 text-white rounded-[3px] px-[10px] py-[5px]" onClick={() => handleColorChange('red')}>Red</button>
          <button className="bg-blue-500 text-white rounded-[3px] px-[10px] py-[5px]" onClick={() => handleColorChange('blue')}>Blue</button>
          <button className="bg-blue-500 text-white rounded-[3px] px-[10px] py-[5px]" onClick={() => handleColorChange('green')}>Green</button>
          {/* Add more color options */}
        </div>
      </div>
    );
  };
  
  
  export default ColorPreference;