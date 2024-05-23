"use client"
import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {

    // Assuming you have an array of data
  const data = [
    {
      title: 'Jane Doe',
      category: 'web',
      id: 1,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      title: 'Mike Ross',
      category: 'web',
      id: 2,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      title: 'John Doe',
      category: 'mobile',
      id: 3,
    //   email: 'example@example.com',
      imgUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  ];

  const [items,setItems] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design'];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
  }

  const filteredProject = selectedCategory === 'all' ? items : items.filter(val => val.category === selectedCategory)

  return (
    <>
     <label>Filter by category:</label>
     <select onChange={(e) => handleSelectCategory(e.target.value)} value={selectedCategory}>
        {categories.map((category) => {
            return(
                <>
                 <option key={category} value={category}>{category}</option>
                </>
            )
        })}
     </select>
     <div className="portfolio-gallery">
        {filteredProject.map((project) => {
            return(
                <div key={project.id} className='portfolio-item'>
                    <h3>{project.title}</h3>
                    {/* Render other project details */}
                </div>
            )
        })}
        {filteredProject.length === 0 && (
            <p>no projects found for the selected category.</p>
        )}
     </div>
       
    </>
  )
}

export default CustomApp
