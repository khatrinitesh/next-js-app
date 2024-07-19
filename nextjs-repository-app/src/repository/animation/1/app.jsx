import React, { useState, useEffect } from 'react';

const CustomApp = () => {
    
  return (
    <div>
      <CarAnimation/>
    </div>
  )
}

export default CustomApp

const CarAnimation = () => {
    const [position,setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => prevPosition+1);
        },20)

        return () => clearInterval(interval)
    }, []);

    return(
        <>
        <div className="relative h-16 w-full bg-lime-100">
            <div className="absolute top-0 left-0" style={{ transform: `translateX(${position}px)` }}>
                <img src="https://cdn.pixabay.com/photo/2023/05/24/21/26/car-8015901_960_720.jpg" alt="car" className="h-16" />
            </div>
            <marquee behavior="" direction="right">Elit deserunt laborum cillum laboris tempor.</marquee>
        </div>
        </>
    )
}