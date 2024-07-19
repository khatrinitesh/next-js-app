import { useEffect, useRef } from 'react';
import Particles from 'particles.js';

const useParticles = (config) => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      if (!containerRef.current) return;
  
      // Initialize particles
      Particles.init({
        ...config,
        selector: containerRef.current,
      });
  
      // Clean up on unmount
      return () => {
        Particles.destroy(containerRef.current);
      };
    }, [config]);
  
    return containerRef;
  };
  
  export default useParticles;