import React, { useState, useRef } from "react";
// import "./style.css";

const Example = () => {
  const [spellCheckEnabled, setSpellCheckEnabled] = useState(true);

  const toggleSpellCheck = () => {
    setSpellCheckEnabled(!spellCheckEnabled);
  };
  return (
    <>
     <input
        type="text"
        placeholder="Enter text"
        className="border border-gray-300 rounded-md px-3 py-2"
        spellCheck={spellCheckEnabled} // Toggle spellcheck
      />
      <button onClick={toggleSpellCheck} className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-md">
        {spellCheckEnabled ? 'Turn Off Spellcheck' : 'Turn On Spellcheck'}
      </button>
    </>
  )
};

export default Example;
