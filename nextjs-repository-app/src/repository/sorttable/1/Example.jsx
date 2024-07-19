import React, { useState, useEffect } from "react";
import "./style.css";


const initialData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 35 },
  ];


const Example = () => {
    const [data, setData] = useState(initialData);
    const [sortKey,setSortkey] = useState(null);

    const sortByKey = (key) => {
        const sortedData = [...data].sort((a,b) => {
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        });
        setData(sortedData);
        setSortkey(key);
    }
  
  return (
    <>
        <div className="container">
      <h1 className="text-xl font-bold mb-4">Sortable Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => sortByKey('id')} className={sortKey === 'id' ? 'sorted' : ''}>ID</th>
            <th onClick={() => sortByKey('name')} className={sortKey === 'name' ? 'sorted' : ''}>Name</th>
            <th onClick={() => sortByKey('age')} className={sortKey === 'age' ? 'sorted' : ''}>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

export default Example;
