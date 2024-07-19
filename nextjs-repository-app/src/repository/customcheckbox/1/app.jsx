import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <CustomCheckbox/>
    </>
  )
};

export default CustomApp;

const CustomCheckbox = () => {
  const [isChecked, setIschecked] = useState(false);

  const handleCheckboxChange = () => {
    setIschecked(!isChecked);
  };
  return (
    <>
      <div className="flex items-center">
        
        <label  className="ml-2 block text-sm text-gray-900">
          Custom Checkbox
          <input 
          type="checkbox"
          className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-md"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        </label>
      </div>
    </>
  );
};
