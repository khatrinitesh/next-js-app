import React, { useState } from "react";

export default function CustomApp() {
  const [activeTab, setActiveTab] = useState("Tab 1");
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex border-b border-gray-300">
          <Tab
            label="Tab 1"
            active={activeTab === "Tab 1"}
            onClick={() => setActiveTab("Tab 1")}
          />
          <Tab
            label="Tab 2"
            active={activeTab === "Tab 2"}
            onClick={() => setActiveTab("Tab 2")}
          />
          <Tab
            label="Tab 3"
            active={activeTab === "Tab 3"}
            onClick={() => setActiveTab("Tab 3")}
          />
        </div>
        <div className="flex-grow bg-gray-100 p-4">
          {activeTab === "Tab 1" && <p>Content for Tab 1</p>}
          {activeTab === "Tab 2" && <p>Content for Tab 2</p>}
          {activeTab === "Tab 3" && <p>Content for Tab 3</p>}
        </div>
      </div>
    </>
  );
}

const Tab = ({ label, active, onClick }) => {
  return (
    <button
      className={`py-2 px-4 text-gray-600 hover:text-gray-800 focus:outline-none ${
        active ? "border-b-2 border-gray-800 font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
