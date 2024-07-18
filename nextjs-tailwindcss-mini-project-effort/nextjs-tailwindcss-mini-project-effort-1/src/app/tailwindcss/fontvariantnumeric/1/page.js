import React from "react";

const TailwindCSSApp = () => {
  return (
    <div className="flex flex-col">
        <span className="ordinal slashed-zero tabular-nums ">1234567890</span>
        <p class="ordinal">1st</p>
        <p class="slashed-zero">0</p>
        <p class="lining-nums">1234567890</p>
    </div>
  );
};

export default TailwindCSSApp;
