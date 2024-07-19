import React, { useState, useEffect } from 'react';
// import './style.css';

const Example = () => {

    const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsHeaderShrunk(true);
          } else {
            setIsHeaderShrunk(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
     <div className={`header ${isHeaderShrunk ? 'shrink' : ''}`}>
      <h1>Header</h1>
    </div>
    </>
  );
};

export default Example;
