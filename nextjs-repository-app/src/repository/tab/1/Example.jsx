import React,{useState } from "react";
// import "./style.css";

const Example = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"]; // Define tab titles

  const content = [
    <div>Gallery Content for Tab 1</div>,
    <div>Gallery Content for Tab 2</div>,
    <div>Gallery Content for Tab 3</div>,
  ]; // Define corresponding gallery content

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{content[activeTab]}</div>
    </>
  );
};

export default Example;
