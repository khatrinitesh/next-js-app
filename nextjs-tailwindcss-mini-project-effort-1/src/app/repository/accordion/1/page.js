"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './style.css';


const CustomApp = () => {
    const accordionItems = [
        { title: 'Section 1', content: 'Content for section 1...' },
        { title: 'Section 2', content: 'Content for section 2...' },
        { title: 'Section 3', content: 'Content for section 3...' },
      ];
    
  return (
    <div>
      <AccordionItem items={accordionItems}/>
    </div>
  )
}

export default CustomApp

const AccordionItem = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className={`accordion-header ${index === activeIndex ? 'active' : ''}`} onClick={() => handleClick(index)}>
                <FontAwesomeIcon icon={index === activeIndex ? faMinus : faPlus} className="accordion-icon" />
            {item.title}
            </div>
            {index === activeIndex && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    );
};