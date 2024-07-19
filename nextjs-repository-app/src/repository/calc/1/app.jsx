import React,{useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <Calculator/>
    </>
  )
}

export default CustomApp

const Calculator = () => {
    const [input, setInput] = useState(''); // State to store input value
    const [result, setResult] = useState(''); // State to store result
  
    // Function to handle button click
    const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
    };
  
    // Function to evaluate expression and update result
    const calculateResult = () => {
      try {
        const expression = input.replace(/x/g, '*'); // Replace 'x' with '*' for multiplication
        setResult(eval(expression)); // Use eval() to evaluate the expression
      } catch (error) {
        setResult('Error');
      }
    };
  
    // Function to clear input and result
    const clearInput = () => {
      setInput('');
      setResult('');
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Display screen */}
        <div className="mb-4 border border-gray-300 p-2 rounded-md w-72 text-right">
          {result !== '' ? result : input || '0'}
        </div>
  
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* Numbers */}
          {[7, 8, 9, '/', 4, 5, 6, 'x', 1, 2, 3, '-', '.', 0, '=', '+', 'C'].map((button) => (
            <button
              key={button}
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md"
              onClick={() => {
                if (button === '=') {
                  calculateResult();
                } else if (button === 'C') {
                  clearInput();
                } else {
                  handleButtonClick(button);
                }
              }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    );
  };