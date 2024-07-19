import React,{useRef } from 'react';

const CustomApp = () => {

    return (
      <div>
        <h1>Image Zoom Example</h1>
      <ImageZoom imageUrl="https://via.placeholder.com/640x360" />
      </div>
    );
}

export default CustomApp

// Custom hook for handling image zoom with mouse wheel
function useImageZoom(initialScale = 1, zoomStep = 0.1) {
    const [scale, setScale] = React.useState(initialScale);
    const ref = useRef(null);
  
    const handleWheel = (e) => {
      e.preventDefault();
      const newScale = e.deltaY > 0 ? scale - zoomStep : scale + zoomStep;
      setScale(Math.max(0.1, Math.min(10, newScale))); // Limit scale between 0.1 and 10
    };
  
    React.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
          node.removeEventListener('wheel', handleWheel);
        };
      }
    }, [scale]); // Re-run effect when scale changes
  
    return { scale, ref };
  }
  
  // Component using the custom hook
  function ImageZoom({ imageUrl }) {
    const { scale, ref } = useImageZoom();
  
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          ref={ref}
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease',
            transformOrigin: '0 0', // Zoom from top-left corner
            cursor: 'zoom-in', // Change cursor to indicate zoom
          }}
        >
          <img src={imageUrl} alt="Zoomable" style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    );
  }