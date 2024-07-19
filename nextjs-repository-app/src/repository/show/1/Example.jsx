import React, { useState } from "react";
// import './style.css';

const Example = () => {

    const [show,setShow] = useState(false);

    const btnToggle =() => {
        setShow(!show);
    }
  
  return (
    <>
    <button onClick={btnToggle}>Click toggle</button>
      {show ? (<><div>A</div></>) : (<><div>B</div></>)}
    </>
  );
};

export default Example;
