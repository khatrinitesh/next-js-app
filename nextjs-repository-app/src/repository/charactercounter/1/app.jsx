import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <CharacterCounter />
    </>
  );
};

export default CustomApp;

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const maxLength = 100; // Maximum character limit

  const handleChange = (e) => {
    const msgLimit = e.target.value 
    if(msgLimit.length <= maxLength) {
        setText(msgLimit);
    }
  };
  return (
    <>
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder='type something..."'
      ></textarea>
      <div className="flex justify-end mt-2">
        <span className="text-gray-500">{text.length} / {maxLength}</span>
      </div>
    </>
  );
};
