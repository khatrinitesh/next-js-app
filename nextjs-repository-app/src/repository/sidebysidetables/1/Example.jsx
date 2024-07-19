import React, { useState } from 'react';
// import './style.css';

const Example = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
     <div className="flex">
      <table className="min-w-max w-1/2 mr-4">
        <thead>
          <tr>
            <th className="bg-gray-800 text-white text-left py-2 px-4">Header 1</th>
            <th className="bg-gray-800 text-white text-left py-2 px-4">Header 2</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 bg-white text-left py-2 px-4">Data 1A</td>
            <td className="border border-gray-400 bg-white text-left py-2 px-4">Data 1B</td>
            {/* Add more data cells as needed */}
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      <table className="min-w-max w-1/2">
        <thead>
          <tr>
            <th className="bg-gray-800 text-white text-left py-2 px-4">Header 3</th>
            <th className="bg-gray-800 text-white text-left py-2 px-4">Header 4</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 bg-white text-left py-2 px-4">Data 2A</td>
            <td className="border border-gray-400 bg-white text-left py-2 px-4">Data 2B</td>
            {/* Add more data cells as needed */}
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Example;
