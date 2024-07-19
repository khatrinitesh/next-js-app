import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <Sidebar/>
    </>
  )
};

export default CustomApp;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div
        className={`h-full bg-gray-800 text-white transition ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl">Logo</h1>
          <button
            onClick={toggleSidebar}
            className="text-xl focus:outline-none"
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>
        <ul>
          <li className="p-4 hover:bg-gray-700">Item 1</li>
          <li className="p-4 hover:bg-gray-700">Item 2</li>
          <li className="p-4 hover:bg-gray-700">Item 3</li>
        </ul>
      </div>
    </>
  );
};
