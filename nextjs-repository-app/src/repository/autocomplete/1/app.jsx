import React, { useState } from 'react'

const CustomApp = () => {

    const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry'];
  return (
    <>
        <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Autocomplete Example</h1>
        <Autocomplete suggestions={suggestions} />
        </div>
    </>
  )
}

export default CustomApp

const Autocomplete = ({ suggestions }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setInputValue(inputValue);
  
      // Filter suggestions based on input value
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filteredSuggestions);
    };
  
    const handleSuggestionClick = (suggestion) => {
      setInputValue(suggestion);
      setFilteredSuggestions([]);
    };
  
    return (
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Type to search..."
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute top-full z-10 w-full bg-white border border-gray-300 rounded-md shadow-md">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
