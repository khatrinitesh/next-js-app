import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <CollapsedSidePanel/>
    </>
  )
};

export default CustomApp;

const CollapsedSidePanel = () => {
  const [collapse, setCollapse] = useState(false);

  const handleToggle = () => {
    setCollapse(!collapse);
  };
  return (
    <>
      <div className="flex">
        <div className={`flex-grow ${collapse ? 'ml-0' : 'ml-64'}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4" onClick={handleToggle}>Toggle Side Panel</button>
          <div className="p-4">
            <h1>Main Content</h1>
            <p>This is the main content area.</p>
          </div>
        </div>
        {/* side panel */}
        <div className={`h-screen bg-gray-200 w-64 ${collapse ? 'block' : 'hidden'} overflow-y-auto`}>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-4" onClick={handleToggle}>
            Close
            </button>
            <div className="p-4">
                <h1>Side panel</h1>
                <p>This is the collapsed side panel.</p>
            </div>
        </div>
      </div>
    </>
  );
};
