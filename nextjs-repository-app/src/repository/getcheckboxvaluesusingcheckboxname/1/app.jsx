import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <CheckboxExample/>
    </>
  );
};

export default CustomApp;

const CheckboxExample = () => {
  // State to keep track of checked checkboxes
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    // Add more checkboxes as needed
  });

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  // Function to get values of checked checkboxes
  const getCheckedValues = () => {
    const checkedValues = Object.keys(checkboxes).filter(
      (key) => checkboxes[key]
    );
    return checkedValues;
  };

  return (
    <>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="option1"
          checked={checkboxes.option1}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Option 1</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="option2"
          checked={checkboxes.option2}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Option 2</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          name="option3"
          checked={checkboxes.option3}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Option 3</span>
      </label>

      <button onClick={() => console.log(getCheckedValues())}>
        Get Checked Values
      </button>
    </>
  );
};
