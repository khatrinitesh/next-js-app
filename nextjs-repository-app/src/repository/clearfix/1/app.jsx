import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
       <div className="float-left">Floating Element 1</div>
      <div className="float-left">Floating Element 2</div>
      <Clearfix />
      <div>Normal Content</div>
    </>
  )
}

export default CustomApp

const Clearfix = () => {
    return(
        <>
        <div className="clearfix"></div>
        </>
    )
}
