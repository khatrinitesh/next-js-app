import React, { useState, useEffect } from "react";
// import "./style.css";

const Example = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API when the form is submitted
    setWeatherData(null); // Clear previous data
    // Fetch weather data for the entered city
    setCity(e.target.elements.city.value);
  };

  return (
    <>
      <>
        <article class="text-wrap ...">
          <h3>Beloved Manhattan soup stand closes</h3>
          <p>New Yorkers are facing the winter chill...</p>
        </article>
        </>
    </>
  );
};

export default Example;
