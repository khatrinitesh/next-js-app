import React, { useState } from "react";
import ColorPreference from "./PreferColorScheme";

const CustomApp = () => {
  const [themeColor, setThemeColor] = useState(""); // State to store selected theme color

  return (
    <>
      <div className="app-container" style={{ backgroundColor: themeColor }}>
        <ColorPreference setThemeColor={setThemeColor} />
        <h1>Hello, World!</h1>
        <p>
          This is a sample React application with preference-based color scheme.
        </p>
        {themeColor}
      </div>
    </>
  );
};

export default CustomApp;
