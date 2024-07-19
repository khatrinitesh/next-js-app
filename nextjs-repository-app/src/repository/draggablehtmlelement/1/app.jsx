import React,{ useState ,useEffect, useRef } from 'react';

const CustomApp = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef(null);

    // Custom hook to handle dragging logic
    useDraggable(elementRef, setPosition);
  return (
    <>
      <div
      ref={elementRef}
      className="w-32 h-32 bg-blue-500 absolute"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* Content of draggable element */}
    </div>
    </>
  )
}

export default CustomApp

const useDraggable = (elementRef, setPosition) => {
    const offset = useRef({ x: 0, y: 0 });
    const isDragging = useRef(false);
  
    useEffect(() => {
      const handleMouseDown = (event) => {
        isDragging.current = true;
        const { left, top } = elementRef.current.getBoundingClientRect();
        offset.current = {
          x: event.clientX - left,
          y: event.clientY - top,
        };
      };
  
      const handleMouseMove = (event) => {
        if (isDragging.current) {
          const x = event.clientX - offset.current.x;
          const y = event.clientY - offset.current.y;
          setPosition({ x, y });
        }
      };
  
      const handleMouseUp = () => {
        isDragging.current = false;
      };
  
      // Add event listeners
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        // Clean up event listeners
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [elementRef, setPosition]);
  
    return elementRef;
  };