import React, { isValidElement, useState } from "react";

const CustomApp = () => {
  return (
    <>
    <FadeOutComponent/>
    </>
  )
};

export default CustomApp;

const FadeOutComponent = () => {
  const [visible, setVisible] = useState(true);

  const handleFadeOut = () => {
    setVisible(false);
    // Optionally, you can add a timeout to remove the component from the DOM after the fade-out animation completes
    setTimeout(() => {
      // Code to remove the component or perform any other action
    }, 5000);
  };
  return (
    <>
      {visible && (
        <>
          <div className="fade-out">
            <p>This is a fade-out component.</p>
            <button onClick={handleFadeOut}>Fade Out</button>
          </div>
        </>
      )}
    </>
  );
};
