import React,{useState,useEffect} from 'react'

const CustomApp = () => {
  return (
    <>
      <AutoComplete/>
    </>
  )
}

export default CustomApp

const AutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // Extract fruit names from the fetched data
        const fruitNames = data.map((fruit) => fruit.name)
        setFruits(fruitNames);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  useEffect(() => {
    setFilteredFruits(
      fruits.filter(fruit => fruit.toLowerCase().includes(inputValue.toLowerCase()))
    );
  }, [inputValue, fruits]);

  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const handleSuggestionClick = (fruit) => {
    setInputValue(fruit);
    setFilteredFruits([]);
  };
    return(
        <>
         <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a fruit..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-64"
      />
      {inputValue && (
        <ul className="mt-2 w-64 border border-gray-300 rounded-lg shadow-md">
          {filteredFruits.map((fruit, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(fruit)}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
    </>
    )
}
