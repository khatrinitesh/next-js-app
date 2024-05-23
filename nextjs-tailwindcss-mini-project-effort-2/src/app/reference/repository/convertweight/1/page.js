'use client';

import React, { useState } from 'react';

const CustomApp = () => {

    const [inputVal,setInputVal] = useState('');
    const [selectedUnit,setSelectedUnit] = useState('pounds');
    const [result,setResult] = useState('');

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleUnitChange = () => {
        setSelectedUnit(e.target.value)
    }

    const convertWeight = () => {
        const value = parseFloat(inputVal);

        if(isNaN(value)){
            setResult('please enter a valid number');
            return;
        }
        if(selectedUnit === 'pounds'){
            setResult(`${value} pounds is ${value * 0.453592} kilograms`)
        }
        else{
            setResult(`${value} kilograms is ${value * 2.20462} pounds`);
        }
    }


  return (
    <>
         <h1>Weight Converter</h1>
         <input type="text" value={inputVal} onChange={handleInputChange} placeholder='Enter weight'/>
         <select value={selectedUnit} onChange={handleUnitChange}>
            <option value="pounds">Pounds</option>
            <option value="kilograms">Kilograms</option>
         </select>
         <button onClick={convertWeight}>Convert</button>
         <div>
            <p>{result}</p>
         </div>
    </>
  )
}

export default CustomApp
