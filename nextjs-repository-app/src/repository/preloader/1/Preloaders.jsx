import React, { useState, useEffect } from "react";
import './style.css';

const Preloaders = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data from an API)
    const timer = setTimeout(() => {
        setIsLoading(false)
    },2000)

    // Cleanup function to clear the timeout
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? "show" : "hide"}`}>
      <div className="spinner"></div>
      <br />
      <p>Loading...</p>
    </div>
  );
};

export default Preloaders;
