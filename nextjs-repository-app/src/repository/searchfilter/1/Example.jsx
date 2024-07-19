import React, { useState } from "react";


const Example = ({data, filterData }) => {
    const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    filterData(value);
  };
  
  return (
    <>
       <div className="my-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
    </>
  );
};

export default Example;
