import React from 'react';
import './style.css';   

const CustomApp = () => {
  return (
    <>
    <HeadlinesAnimation/>
    </>
  )
}

export default CustomApp

const HeadlinesAnimation = () => {
    return (
        <div className="waviy">
        <span className="animate-waviy" style={{'--i': 1}}>Z</span>
        <span className="animate-waviy" style={{'--i': 2}}>I</span>
        <span className="animate-waviy" style={{'--i': 3}}>Y</span>
        <span className="animate-waviy" style={{'--i': 4}}>O</span>
        <span className="animate-waviy" style={{'--i': 5}}>V</span>
        <span className="animate-waviy" style={{'--i': 6}}>U</span>
        <span className="animate-waviy" style={{'--i': 7}}>D</span>
        <span className="animate-waviy" style={{'--i': 8}}>D</span>
        <span className="animate-waviy" style={{'--i': 9}}>I</span>
        <span className="animate-waviy" style={{'--i': 10}}>N</span>
      </div>
    );
  };