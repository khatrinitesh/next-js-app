import React,{useState } from 'react';
import './style.css';



const CustomApp = () => {
  return (
    <>
        <h1 className='font-bold text-[32px]'>Load more</h1>
        <LoadMore />
    </>
  )
}

export default CustomApp

const LoadMore = () => {
    const [items, setItems] = useState([1, 2, 3]); // Initial items
    const [loading, setLoading] = useState(false);
  
    const loadMoreItems = () => {
      setLoading(true);
      // Simulating an asynchronous data fetch
      setTimeout(() => {
        const newItems = Array.from({ length: 3 }, (_, index) => index + items.length + 1);
        setItems(prevItems => [...prevItems, ...newItems]);
        setLoading(false);
      }, 1000); // Simulate loading delay
    };
  
    return (
      <div className="load-more-container">
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">{item}</li>
          ))}
        </ul>
        <button className="load-more-button" onClick={loadMoreItems} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    );
  };
  