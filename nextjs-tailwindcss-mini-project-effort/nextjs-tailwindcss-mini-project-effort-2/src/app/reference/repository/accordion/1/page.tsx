import React, { useState } from 'react';
import styles from './accordion.module.css';

const CustomApp = () => {
    const items = [
        {
          title: 'Item 1',
          content: 'Content for item 1',
        },
        {
          title: 'Item 2',
          content: 'Content for item 2',
        },
        {
          title: 'Item 3',
          content: 'Content for item 3',
        },
      ];
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default CustomApp

const useAccordion = (totalItems) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return { openIndex, handleToggle };
  };

const Accordion = ({ items }) => {
    const { openIndex, handleToggle } = useAccordion(items.length);
    
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => handleToggle(index)}>
              {item.title}
              <span className={`${styles.icon} ${openIndex === index ? styles.open : ''}`}>+</span>
            </div>
            {openIndex === index && <div className={styles.accordionContent}>{item.content}</div>}
          </div>
        ))}
      </div>
    );
  };