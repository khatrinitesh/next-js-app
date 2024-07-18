"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";

const CustomApp = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 30 },
        { id: 3, name: 'Bob Johnson', age: 22 },
      ];
    
      const itemsPerPage = 2;
    
  return <>
       <Table data={data} itemsPerPage={itemsPerPage} />
  </>;
};

export default CustomApp;

const Table = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="my-8">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">ID</th>
              <th className="py-2 px-4 border-b text-center">Name</th>
              <th className="py-2 px-4 border-b text-center">Age</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-center">{item.id}</td>
                <td className="py-2 px-4 border-b text-center">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="mt-4">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index + 1}
                className={`px-3 py-2 border border-gray-300 cursor-pointer ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };