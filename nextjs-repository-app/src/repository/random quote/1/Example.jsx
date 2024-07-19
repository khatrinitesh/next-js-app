import React, { useState, useEffect } from "react";
import "./style.css";

const Example = () => {
  const [quotes, setQuotes] = useState([]);

  const API_URL_QUOTATION = "https://dummyjson.com/quotes/random";

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`${API_URL_QUOTATION}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuotes(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching quotations:", error);
      }
    };
    fetchQuotes();
  }, []);

 
//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       const randomIndex = Math.floor(Math.random() * quotes.length);
//       setQuotes(quotes[randomIndex]);
//     }); // change quote every 5 seconds
//     return () => clearInterval(intervalID);
//   }, [quotes]);

  return (
    <>
       <div className="quote-slideshow">
          <blockquote>
            <p>{quotes?.id}</p>
            <p>{quotes?.quote}</p>
            <footer>{quotes?.author}</footer>
          </blockquote>
        
      </div>
    </>
  );
};

export default Example;
