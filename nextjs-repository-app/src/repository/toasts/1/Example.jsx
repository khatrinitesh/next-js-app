import React,{useState } from "react";
import "./style.css";

const Example = () => {
    const [showToast, setShowToast] = useState(false);

    const launchToast = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    };
  return (
    <>
    <div className="fixed bottom-5 left-0 right-0 flex justify-center">
      <button onClick={launchToast} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Toast
      </button>
      <div className={`toast ${showToast ? 'show' : ''}`} id="toast">
        <div className="img w-12 h-12 flex items-center justify-center bg-black text-white">Icon</div>
        <div className="desc flex-grow text-white px-4">A notification message..</div>
      </div>
    </div>
    </>
  );
};

export default Example;

