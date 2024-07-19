import React, { useState } from "react";

const CustomApp = () => {
  const [activeButton, setActiveButton] = useState("Home");
  return (
    <>
      <div className="h-screen flex">
        <div className="flex flex-col bg-gray-200 w-24 p-4">
          <SideNavButton
            label="Home"
            active={activeButton === "Home"}
            onClick={() => setActiveButton("Home")}
          />
          <SideNavButton
            label="About"
            active={activeButton === "About"}
            onClick={() => setActiveButton("About")}
          />
          <SideNavButton
            label="Services"
            active={activeButton === "Services"}
            onClick={() => setActiveButton("Services")}
          />
          <SideNavButton
            label="Contact"
            active={activeButton === "Contact"}
            onClick={() => setActiveButton("Contact")}
          />
        </div>
        <div className="flex flex-grow justify-center items-center">
          <p>Main content goes here</p>
        </div>
      </div>
    </>
  );
};

export default CustomApp;

const SideNavButton = ({ label, icon, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`flex items-center p-3 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none ${
        active ? "text-gray-800" : ""
      } ${isHovered && !active ? "bg-gray-100" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
