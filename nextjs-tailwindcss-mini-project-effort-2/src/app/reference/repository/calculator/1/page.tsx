"use client";

import './style.css';
import React,{useState} from 'react'

const CustomApp = () => {
    const [input,setInput] = useState('')

    const handleClick = (val) => {
        setInput((prevIn) => prevIn + val);
    }

    const handleClear = () => {
        setInput('')
    }

    const handleCalc = () => {
        try{
            const result = eval(input)
            setInput(result.toString());
        }
        catch(error){
            setInput('Error',error)
        }
    }

  return (
    <div>
        <input type="text" value={input} readOnly />
        <br />
        <button className="btnCalc" onClick={() => handleClick('1')}>1</button>
        <button className="btnCalc" onClick={() => handleClick('2')}>2</button>
        <button className="btnCalc" onClick={() => handleClick('3')}>3</button>
        <button className="btnCalc" onClick={() => handleClick('+')}>+</button>
        <br />
        <button className="btnCalc" onClick={() => handleClick('4')}>4</button>
        <button className="btnCalc" onClick={() => handleClick('5')}>5</button>
        <button className="btnCalc" onClick={() => handleClick('6')}>6</button> 
        <button className="btnCalc" onClick={() => handleClick('-')}>-</button>
        <br />
        <button className="btnCalc" onClick={() => handleClick('7')}>7</button>
        <button className="btnCalc" onClick={() => handleClick('8')}>8</button>
        <button className="btnCalc" onClick={() => handleClick('9')}>9</button>
        <button className="btnCalc" onClick={() => handleClick('*')}>*</button>
        <br />
        <button className="btnCalc" onClick={() => handleClick('0')}>0</button>
        <button className="btnCalc" onClick={() => handleClick('.')}>.</button>
        <button className="btnCalc" onClick={handleCalc}>=</button>
        <button className="btnCalc" onClick={handleClear}>C</button>
        <button className="btnCalc" onClick={() => handleClick('/')}>/</button>
    </div>
  )
}

export default CustomApp
