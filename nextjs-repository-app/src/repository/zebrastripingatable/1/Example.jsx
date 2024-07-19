import React, { useState, useEffect } from "react";
// import "./style.css";

const Example = () => {
  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Alice Johnson", age: 35 },
    { id: 4, name: "Bob Brown", age: 40 },
    { id: 5, name: "Eva White", age: 28 },
  ];

  return (
    <>
      <div className="flex justify-center">
        <table className="table-auto border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-[yellow]" : "bg-[orange]"}
              >
                <td className="border px-4 py-2">{row.id}</td>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Example;
