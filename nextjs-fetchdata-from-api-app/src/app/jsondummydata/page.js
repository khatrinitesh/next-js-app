"use client";
import { useState, useEffect } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const baseurl =
    "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseurl);
      if (!response.ok) {
        throw new Error(`Sorry sent something ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h2 className="font-bold">Fetch Data - RAW</h2>
      {data.map((val) => (
        <div key={val.id} className="border-b p-4">
          <p>
            <strong>Name:</strong> {val.Name}
          </p>
          <p>
            <strong>Language:</strong> {val.language}
          </p>
          <p>
            <strong>ID:</strong> {val.id}
          </p>
          <p>
            <strong>Bio:</strong> {val.bio}
          </p>
          <p>
            <strong>Version:</strong> {val.version}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
