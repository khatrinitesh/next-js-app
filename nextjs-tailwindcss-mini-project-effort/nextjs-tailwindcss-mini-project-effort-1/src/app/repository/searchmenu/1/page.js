"use client"
import { useState } from "react";

const CustomApp = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
      // Implement your search logic here (e.g., fetch data from an API)
      // For demonstration purposes, we'll use a simple array as results
      const results = ['Result 1', 'Result 2', 'Result 3'];
  
      setSearchResults(results);
    };
  return (
    <div>
      <h1>My Next.js Search App</h1>
      <Search onSearch={handleSearch} />
      <Results results={searchResults} />
    </div>
  )
}

export default CustomApp

const Results = ({ results }) => {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    );
  };
  

const Search = ({onSearch}) => {
    const [query,setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    }

    return(
        <>
         <input type="text" placeholder='...search' value={query} onChange={(e) => setQuery(e.target.value)}/>
         <button onClick={handleSearch}>Search</button>
        </>
    )
}