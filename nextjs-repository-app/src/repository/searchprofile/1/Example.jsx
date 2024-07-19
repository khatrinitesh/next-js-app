import React, { useState } from "react";
import axios from "axios";

const Example = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query,
            per_page: 10,
            client_id: "cDWDr2wVdsZ0cAhlLUWV3-M5LHE8G30I-iCr_8PREY4",
          },
        }
      );
      setPhotos(response.data.results);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  return (
    <>
     <div className="container mx-auto my-8">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search photos..."
          className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} className="rounded-md" />
        ))}
      </div>
    </div>
    </>
  )
};

export default Example;
