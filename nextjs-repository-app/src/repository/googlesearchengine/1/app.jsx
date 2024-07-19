import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <SearchBar />
    </>
  );
};

export default CustomApp;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CX&q=${query}`
      );
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  return(
    <>
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your search query"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <div key={result.cacheId}>
            <h2>{result.title}</h2>
            <p>{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
};
