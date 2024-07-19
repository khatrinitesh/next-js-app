import React,{useState } from "react";

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
       <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in md:w-64 w-40 bg-white border-r border-gray-200 ${
          isOpen ? "transition-all duration-300 ease-in" : "hidden"
        }`}
      >
        <div className="p-4">
          <h1 className="text-xl font-semibold">Sidebar</h1>
          {/* Sidebar links */}
          <ul className="mt-4">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium block py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium block py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium block py-2"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 font-medium block py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        {/* Toggle button */}
        <button
          className="md:hidden block text-gray-600 focus:outline-none focus:text-gray-800"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <h1 className="text-2xl font-semibold text-gray-900">
                Content
              </h1>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Example;
