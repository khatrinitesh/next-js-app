import React, { useState, useEffect } from 'react';
import Example from './Example';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const CustomApp = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or some asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating 3 seconds of loading time
  }, []);
  return (
    <>
        {loading ? <Example /> : <> 
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    </>}
    </>
  )
}

export default CustomApp