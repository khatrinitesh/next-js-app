import React, { useState, useEffect  } from "react";
// import "./style.css";

const Example = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const apiKey = "0c1907a9ee37b190dcccec9cf3d9142c";
  const apiServer = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`${apiServer}`);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API when the form is submitted
    setWeatherData(null); // Clear previous data
    // Fetch weather data for the entered city
    setCity(e.target.elements.city.value);
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="city" placeholder="Enter city" />
          <button type="submit">Get Weather</button>
        </form>
        {weatherData && (
          <div>
            <h2><b>Weather Name:</b> {weatherData.name}</h2>
            <p><b>Temperature:</b> {weatherData.main.temp}°C</p>
            <p><b>Weather:</b> {weatherData.weather[0].main}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Example;
