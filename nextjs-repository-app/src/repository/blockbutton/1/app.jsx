import React from 'react';

const CustomApp = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };
  return (
    <>
        <div className="flex justify-center items-center h-screen">
            <BlockButton text="Primary Button" onClick={handleClick} color="blue-800" />
            <BlockButton text="Secondary Button" onClick={handleClick} color="blue-900" />
            <BlockButtonApp text="Tertiary Button" onClick={handleClick} color="red-700"/>
        </div>
    </>
  )
}

export default CustomApp

const BlockButton = ({ text, onClick, color }) => {
    return (
      <button
        className={`block w-full px-4 py-2 bg-${color} text-white rounded-md shadow-md hover:bg-${color}-600 focus:outline-none focus:ring focus:ring-${color}-300`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };<br />

  const BlockButtonApp =({text,color,onClick}) => {
    return(
        <>
         <button className={`block w-full px-4 py-2 bg-${color} text-white`} onClick={onClick}>{text}</button>
        </>
    )
  }
