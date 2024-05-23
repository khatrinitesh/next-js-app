"use client";
import { useState } from "react";

const CustomApp = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Orange', 'Grapes']);
    const [filteredItems, setFilteredItems] = useState([]);

  return (
    <>
        <h1>My Next.js Search App 1</h1>
        <SearchBar items={items} setFilteredItems={setFilteredItems} />
        <ResultsList filteredItems={filteredItems} />
    </>
  )
};

export default CustomApp;

const ResultsList = ({ filteredItems }) => {
    return (
      <div>
        <h2 className="font-bold text-[30px] text-[red]">Filtered Results</h2>
        <ul>
            {filteredItems.length > 0 ? (<> {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}</>) : (<><p>No matches found. Please refine your search or use client.</p></>)}
         
        </ul>
      </div>
    );
  };
const SearchBar = ({ items, setFilteredItems }) => {
    const [query, setQuery] = useState('');
  
    const handleSearch = () => {
      const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filteredItems);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  