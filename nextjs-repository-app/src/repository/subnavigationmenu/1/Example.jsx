import React  from "react";
// import "./style.css";

const Example = () => {
  return (
    <>
      <nav className="bg-gray-800">
      <ul className="flex items-center justify-center space-x-4 py-4">
        <li>
          <a href="#" className="text-white hover:text-gray-300">Item 1</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">Item 2</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">Item 3</a>
        </li>
        {/* Add more items as needed */}
      </ul>
    </nav>
    </>
  );
};

export default Example;
