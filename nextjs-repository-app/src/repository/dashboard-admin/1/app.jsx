import React from "react";

const CustomApp = () => {
  return (
    <>
    <DashboardLayout/>
    </>
  )
};

export default CustomApp;

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen">
      {/* Sidebar navigation links */}
      <ul className="p-4">
        <li>
          <a href="#" className="text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Users
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-200">
      {/* Main content */}
      <h1 className="text-3xl font-bold p-4">Dashboard</h1>
      {/* Add more components and content here */}
    </div>
  );
};
