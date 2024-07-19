import React,{useState,useEffect } from 'react';
import './style.css';

const Example = () => {
    const [quotes,setQuotes] = useState([]);
    const [index,setIndex] = useState(0);

    const API_URL_QUOTATION = 'https://dummyjson.com/quotes'
  
    useEffect(() => {
      const fetchQuotes  = async () => {
        try {
          const response = await fetch(`${API_URL_QUOTATION}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setQuotes(data.quotes);
          console.log(data.quotes);
        } catch (error) {
          console.error('Error fetching quotations:', error.message);
        }
      };
  
      fetchQuotes();
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setIndex((prevInterval) => (prevInterval+1) % quotes.length);
        },1000); // change quote every 5 seconds
        return () => clearInterval(intervalID);
    },[quotes]);
  
    return (
      <>
        <div className="quote-slideshow">
            <blockquote>
                <p>{quotes[index]?.quote}</p>
                <footer>{quotes[index]?.author}</footer>
            </blockquote>
        </div>
      </>
    );
  };

export default Example