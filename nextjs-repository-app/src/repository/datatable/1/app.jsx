import React, { useEffect, useState } from "react";
import { FaArrowUp,FaArrowDown } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <DataTable />
    </>
  );
};

export default CustomApp;

const DataTable = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const baseurl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchData();
  }, [sortBy, sortDirection]); // Include sortBy and sortDirection in the dependency array

  const fetchData = async () => {
    try {
      let url = baseurl;
      if (sortBy) {
        url += `?_sort=${sortBy}&_order=${sortDirection}`;
      }
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSort = (columnName) => {
    if (sortBy === columnName) {
      // If already sorting by this column, toggle sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If sorting by a different column, set new column and default sort direction to ascending
      setSortBy(columnName);
      setSortDirection("asc");
    }
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID
            {sortBy === 'id' && (
                <span>
                  {sortDirection === 'asc' ? (
                    <FaArrowUp className="w-4 h-4 inline-block" />
                  ) : (
                    <FaArrowDown className="w-4 h-4 inline-block" />
                  )}
                </span>
              )}</th>
            <th onClick={() => handleSort("name")}>Name
            {sortBy === 'name' && (
                <span>
                  {sortDirection === 'asc' ? (
                    <FaArrowUp className="w-4 h-4 inline-block" />
                  ) : (
                    <FaArrowDown className="w-4 h-4 inline-block" />
                  )}
                </span>
              )}
            </th>
            <th onClick={() => handleSort("email")}>Email
            {sortBy === 'email' && (
              <span>
                {sortDirection === 'asc' ? (<><FaArrowUp className="w-4 h-4 inline-block" /></>) : (<><FaArrowDown className="w-4 h-4 inline-block" /></>)}
              </span>
            )}
            </th>
            <th onClick={() => handleSort("username")}>Username
            {sortBy === 'username' && (
              <span>
                {sortDirection === 'asc' ? (<><FaArrowUp className="w-4 h-4 inline-block" /></>) : (<><FaArrowDown className="w-4 h-4 inline-block" /></>)}
              </span>
            )}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            const { id, name, email, username } = val;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
