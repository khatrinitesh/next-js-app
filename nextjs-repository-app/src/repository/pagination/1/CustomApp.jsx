import React, { useState } from "react";
import Pagination from "./Pagination";
import './style.css';

const CustomApp = () => {
  // sample data - replace this with your actual data
  const data = Array.from({ length: 100 }, (_, index) => index + 1);

  // Number of items per page
  const itemsPerPage = 10;

  // current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index of items for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page's items
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <>
      <h1>Pagination Example</h1>
      <ul>
        {/* Render current page's items */}
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
    </>
  );
};

export default CustomApp;
