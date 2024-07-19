import React from "react";

const CustomApp = () => {
  return (
    <>
    <BigHeader/>
    </>
  )
};

export default CustomApp;

const BigHeader = () => {
  return (
    <>
      <header className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
          <p className="mt-4 text-xl">Discover amazing content and services.</p>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
