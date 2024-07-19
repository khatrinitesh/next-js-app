import React from 'react';
import "./style.css";

const Example = ({ children  }) => {
    
  return (
    <>
     <div className="overflow-hidden inline-block whitespace-nowrap">
      <div className="marquee">{children}</div>
    </div>
    </>
  );
};

export default Example;
