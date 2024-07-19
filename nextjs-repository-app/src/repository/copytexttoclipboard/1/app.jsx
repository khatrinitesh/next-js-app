import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
     <CustomClipboard/> 
    </>
  )
}

export default CustomApp

const CustomClipboard =({text}) => {
    const [copied, copyToClipboard] = useCopyToClipboard();

    const handleClick = () => {
      copyToClipboard(text);
    };
    return(
        <>
         <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
        </>
    )
}

const useCopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

  const copyToClipboard  =(text) => {
    navigator.clipboard.writeText(text)
    .then(() => setCopied(true))
    .catch((err) => console.error('failed to copy:',error));
  }
    return [copied,copyToClipboard]
}



