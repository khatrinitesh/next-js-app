import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <EmptyInputValidation/>
    </>
  )
};

export default CustomApp;

const EmptyInputValidation = () => {
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const [submitted,setSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!inputVal.trim()){
        setError('Input cannot be empty');
        return;    }
    
    // if input is not empty proceed with your logic here
    console.log("input value:", inputVal);
    // reset input field and error message
    setInputVal("");
    setError("");
    setSubmitted(inputVal);
  };

  return (
    <>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Enter something..."
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <span className="font-bold text-cyan-500">{submitted}</span>
      </div>
    </>
  );
};
