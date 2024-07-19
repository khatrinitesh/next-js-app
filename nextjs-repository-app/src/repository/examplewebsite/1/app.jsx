import React from "react";

const CustomApp = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
     <Header/>
     <div className="flex-grow">
        <Hero/> 
     </div>
     <Footer/>
     </div>
    </>
  )
};

export default CustomApp;

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20 h-full">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-lg">
          This is a simple example website built with React.js and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};
