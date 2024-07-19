import React, { useState } from "react";

const CustomApp = () => {
  const options = [
    { val: "option1", label: "Option 1" },
    { val: "option2", label: "Option 2" },
    { val: "option3", label: "Option 3" },
  ];

  const { val, onChange } = UseCustomSelect("");

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Custom Select</h1>
        <CustomSelect options={options} val={val} onChange={onChange} />
      </div>
    </>
  );
};

export default CustomApp;

const CustomSelect = ({ options, val, onChange }) => {
  return (
    <>
      <select
        value={val}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option.val} value={option.val}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

const UseCustomSelect = (initialVal) => {
  const [val, setVal] = useState(initialVal);

  const handleChange = (newVal) => {
    setVal(newVal);
  };
  return { val, onChange: handleChange };
};
