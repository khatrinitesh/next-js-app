import React,{useState} from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
    <LoadingBtn/>
    </>
  )
};

export default CustomApp;

const LoadingBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // simulating a 2 second delay
  };

  return (
    <>
      <button
        className="loading-btn"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? <div className="spinner"></div> : "Click Me"}
      </button>
    </>
  );
};
