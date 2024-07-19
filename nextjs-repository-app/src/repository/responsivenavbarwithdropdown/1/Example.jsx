import React,{useState } from "react";

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };    

  return (
    <>
      <nav className="bg-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-auto fill-current text-white">Logo</div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li className="relative">
              <button
                className="text-white hover:text-gray-300"
                onClick={toggleDropdown}
              >
                Services
              </button>
              {isOpen && (
                <div className="absolute bg-gray-800 mt-2 p-2 rounded shadow-lg">
                  <a href="#" className="block text-white hover:text-gray-300">
                    Service 1
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300">
                    Service 2
                  </a>
                  <a href="#" className="block text-white hover:text-gray-300">
                    Service 3
                  </a>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleDropdown}>
            <svg
              className="h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 5H5C3.897 5 3 5.897 3 7V17C3 18.103 3.897 19 5 19H19C20.103 19 21 18.103 21 17V7C21 5.897 20.103 5 19 5ZM5 3C2.239 3 0 5.239 0 8V16C0 18.761 2.239 21 5 21H19C21.761 21 24 18.761 24 16V8C24 5.239 21.761 3 19 3H5ZM11 12H5V10H11V12ZM19 12H13V10H19V12Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7H5C3.897 7 3 7.897 3 9V15C3 16.103 3.897 17 5 17H19C20.103 17 21 16.103 21 15V9C21 7.897 20.103 7 19 7ZM5 5C2.239 5 0 7.239 0 10V14C0 16.761 2.239 19 5 19H19C21.761 19 24 16.761 24 14V10C24 7.239 21.761 5 19 5H5ZM7 12H17V10H7V12Z"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute bg-gray-800 mt-2 p-2 rounded shadow-lg">
              <a href="#" className="block text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="block text-white hover:text-gray-300">
                About
              </a>
              <div className="relative">
                <button className="text-white hover:text-gray-300">
                  Services
                </button>
                <div className="absolute left-0 mt-1 p-2 bg-gray-800 rounded shadow-lg">
                  <a
                    href="#"
                    className="block text-white hover:text-gray-300"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-gray-300"
                  >
                    Service 2
                  </a>
                  <a
                    href="#"
                    className="block text-white hover:text-gray-300"
                  >
                    Service 3
                  </a>
                </div>
              </div>
              <a href="#" className="block text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Example;
