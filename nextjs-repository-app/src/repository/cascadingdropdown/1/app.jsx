import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <CascadingDropdown/>
    </>
  )
};

export default CustomApp;

const CascadingDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelecteCity] = useState("");

  const countries = [
    { id: 1, name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
    { id: 2, name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
    { id: 3, name: "India", cities: ["Surat", "Nashik", "Goa"] },
    // Add more countries as needed
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleCityChange = (e) => {
    setSelecteCity(e.target.value);
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        {selectedCountry && (
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City:
            </label>
            <select
              id="city"
              name="city"
              value={selectedCity}
              onChange={handleCityChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select a city</option>
              {countries
                .find((country) => country.name === selectedCountry)
                .cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>
    </>
  );
};
