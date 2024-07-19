import React, { useState } from "react";
// import "./style.css";

const Example = ({ data }) => {
  return (
    <>
      <table className="table-fixed w-full ">
        <caption class="caption-top hover:caption-bottom">
          Table 3.1: Professional wrestlers and their signature moves.
        </caption>
        <tr>
          <thead>
            <th>Id</th>
            <th>Name</th>
          </thead>
        </tr>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Example;
