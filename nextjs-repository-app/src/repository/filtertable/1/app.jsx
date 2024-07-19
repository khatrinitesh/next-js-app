import React, { useState } from "react";

const CustomApp = () => {
    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 40 },
    ];
  return (
    <>
    <FilteredTable data={data}/>
    </>
  )
};

export default CustomApp;

const FilteredTable = ({ data }) => {
  const [filter, setFilter] = useState("");

  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  const handleFilterChange  =(e) => {
    setFilter(e.target.value)
  }

  return (
    <>
        <input type="text" value={filter} onChange={handleFilterChange} placeholder="filter..." />
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((val,index) => {
                const {name,age}= val
                return(
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  );
};
