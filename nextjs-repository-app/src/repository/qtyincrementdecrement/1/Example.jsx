import React,{useState} from 'react';
import './style.css';

const Example = ({btnRes,btnInc,btnDec,count}) => {
    
  return (
    <>
    <div className="flex justify-center items-center mt-10">
      <div className="mr-2">{count}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={btnInc}>+</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={btnDec}>-</button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={btnRes}>Reset</button>
    </div>
    </>
  )
}

export default Example