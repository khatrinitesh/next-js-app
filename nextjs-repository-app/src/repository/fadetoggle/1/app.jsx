import classNames from 'classnames';
import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
     <FadeToggleComponent/> 
    </>
  )
}

export default CustomApp

const FadeToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleVisibility}
        >
          Toggle Fade
        </button>
        <div
          className={classNames(
            'transition-opacity duration-500',
            { 'opacity-0': !isVisible },
            { 'opacity-100': isVisible }
          )}
        >
          {/* Your content here */}
          <p>This content will fade in and out</p>
        </div>
      </div>
    );
  };
