import React,{useRef ,useState ,useEffect } from "react";

const Example = () => {

    const containerRef = useRef(null);

  const handleScroll = (e) => {
    const container = containerRef.current;
    container.scrollTo({
      left: container.scrollLeft + e.deltaY,
      behavior: 'smooth',
    });
  };

  return (
    <>
        <div
      ref={containerRef}
      className="overflow-x-auto w-screen h-screen flex"
      onWheel={handleScroll}
      style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex space-x-4 p-4">
        {/* Example content */}
        {[...Array(100).keys()].map((index) => (
          <div key={index} className="w-64 h-64 bg-gray-200 flex items-center justify-center">
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Example;
