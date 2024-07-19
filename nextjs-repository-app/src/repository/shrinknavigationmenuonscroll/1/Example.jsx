import React, { useState, useEffect } from 'react';
// import './style.css';

const Example = () => {

    const [showSidebar, setShowSidebar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setShowSidebar(false); // Scroll down
      } else {
        setShowSidebar(true); // Scroll up
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <>
     <div className={`sidebar fixed top-0 right-0 h-full w-16 bg-gray-800 ${showSidebar ? 'block' : 'hidden'}`}>
      <ul className="mt-10">
        <li className="py-2 px-4 text-white">Item 1</li>
        <li className="py-2 px-4 text-white">Item 2</li>
        <li className="py-2 px-4 text-white">Item 3</li>
        {/* Add more items as needed */}
      </ul>
    </div>
    </>
  );
};

export default Example;
