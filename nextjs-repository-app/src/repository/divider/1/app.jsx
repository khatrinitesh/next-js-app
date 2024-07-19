import React from "react";

const CustomApp = () => {
  return (
    <>
      <Divider />
    </>
  );
};

export default CustomApp;

const Divider = () => {
  return (
    <>
      <div class="grid grid-cols-3 gap-[20px] divide-x">
        <div className="p-4">01</div>
        <div className="p-4">02</div>
        <div className="p-4">03</div>
      </div>
    </>
  );
};
