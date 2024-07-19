import React, { useState } from 'react';
import Example from './Example';

const CustomApp = () => {

    const [filteredData, setFilteredData] = useState([]);
    const data = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

    const filterData = (query) => {
        const filtered = data.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
      };
  return (
    <>
        <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Search Filter Example</h1>
      <Example data={data} filterData={filterData} />
      <div className="mt-4">
        {filteredData.map((item, index) => (
          <div key={index} className="px-4 py-2 border border-gray-300 rounded-md mb-2">
            {item}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default CustomApp