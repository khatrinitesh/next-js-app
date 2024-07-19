import React, { useState, useEffect } from 'react';
// import "./style.css";

const Example = ({ texts, interval = 2000  }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);
    
        return () => clearInterval(intervalId);
      }, [texts, interval]);
  return (
    <>
     <div className="text-4xl">{texts[index]}</div>;
    </>
  );
};

export default Example;
