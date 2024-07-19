import React from "react";
import Example from "./Example";

const CustomApp = () => {
    const primaryAction = () => {
        console.log('Primary action clicked');
      };
    
      const secondaryActions = [
        { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
        { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
        { label: 'Action 3', onClick: () => console.log('Action 3 clicked') },
      ];
    
    
  return (
    <>
     <h1>Speed Meter</h1>
      <Example primaryAction={primaryAction} secondaryActions={secondaryActions} />
    </>
  );
};

export default CustomApp;
