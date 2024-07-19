import React from "react";

const CustomApp = () => {
  return (
    <>
      <div className="container mx-auto">
        <FullWidthTable />
      </div>
    </>
  );
};

export default CustomApp;

const FullWidthTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Header 1</th>
            <th className="border border-gray-300 px-4 py-2">Header 2</th>
            <th className="border border-gray-300 px-4 py-2">Header 3</th>
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Data 1</td>
            <td className="border border-gray-300 px-4 py-2">Data 2</td>
            <td className="border border-gray-300 px-4 py-2">Data 3</td>
            {/* Add more data cells if needed */}
          </tr>
          {/* Add more rows if needed */}
        </tbody>
      </table>
    </div>
  );
};
