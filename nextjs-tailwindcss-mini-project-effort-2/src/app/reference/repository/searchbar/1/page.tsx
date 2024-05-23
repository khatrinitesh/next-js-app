"use client";
import React,{useState} from 'react';
import Link from 'next/link';
import { FaSearch,FaWindowClose  } from 'react-icons/fa';
import './style.css';

const CustomApp = () => {
    let products = [
        'apples', 'bananas', 'grapefruit', 'kiwi', 'avocados', 
        'lettuce', 'tomatoes', 'cheese', 'bread', 'yogurt', 
        'peas', 'carrots', 'broccoli', 'beans', 'pizza',
        'pasta', 'rice', 'cereal', 'butter', 'milk',
        'eggs', 'onions', 'garlic', 'honey', 'soup',
        'salt', 'pepper', 'oregano', 'basil', 'paprika'
      ];
  return (
    <>
        <SearchBar products={products} />
    </>
  )
}

export default CustomApp

const SearchBar = ({products})  => {
    const [searchVal, setSearchVal] = useState('');
    
    const handleInput = (e) => {
      setSearchVal(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchVal('');
    }
    
    const filteredProducts = products.filter((product) => {
        return product.includes(searchVal);
      });
    
    return (
      <div className='container'>
        <div className='input-wrap'>
          <FaSearch/>
          <label 
            for="product-search" 
            id="input-label"
          >
          </label>
          <input 
            onChange={handleInput}
            value={searchVal}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search Products"
          />
          <FaWindowClose  
            onClick={handleClearBtn}
            className="fas fa-times"
          />
        </div>
        <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'><a href='#'>{product}</a></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
  


