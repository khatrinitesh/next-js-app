import React,{useState,useEffect } from 'react';
import './style.css';
import { API_URL_QUOTATION } from './constants';

const Example = () => {
    const [quotations, setQuotations] = useState([]);

  
    useEffect(() => {
      const fetchQuotations = async () => {
        try {
          const response = await fetch(`${API_URL_QUOTATION}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setQuotations(data.quotes);
          console.log(data.quotes);
        } catch (error) {
          console.error('Error fetching quotations:', error.message);
        }
      };
  
      fetchQuotations();
    }, []);
  
    return (
      <>
        {quotations.map((quotation, index) => (
          <div className="quotation-container" key={index}>
            <h3 className='text-[red] text-[30px] font-bold'>{index}</h3>
            <blockquote>
              <p>{quotation.quote}</p>
              <footer>{quotation.author}</footer>
            </blockquote>
          </div>
        ))}
      </>
    );
  };

export default Example