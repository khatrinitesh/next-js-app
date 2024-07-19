import React, { useState } from "react";

const Example = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Example;
