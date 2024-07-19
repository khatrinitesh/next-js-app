import React from 'react'
import Example from './Example';

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
    <div>
        <Example products={products} />
    </div>
  )
}

export default CustomApp