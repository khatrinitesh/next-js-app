import React, { useState } from 'react';

const PortfolioFiltering = () => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const portfolioItems = [
        { id: 1, title: 'Project web 1', category: 'web' },
        { id: 2, title: 'Project app 1', category: 'app' },
        { id: 3, title: 'Project app 2', category: 'app' },
        { id: 4, title: 'Project mob 1', category: 'mobile' },
        { id: 5, title: 'Project mob 2', category: 'mobile' },
        { id: 6, title: 'Project web 2', category: 'web' },
        // Add more portfolio items
      ];

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };
      const filteredItems = selectedCategory === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <button onClick={() => handleCategoryChange('all')}>All</button>
      <button onClick={() => handleCategoryChange('app')}>App</button>
      <button onClick={() => handleCategoryChange('mobile')}>Mobile</button>
      <div className='grid grid-cols-3 gap-4'>
        {filteredItems.map(item=> (
            <div key={item.id} className='border p-4'>
                <h3>{item.title}</h3>
                {/* Render other details of the portfolio item */}
            </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioFiltering;