import React from "react";
import "./style.css";

const CustomApp = () => {
  return <Loaders />;
};

export default CustomApp;

const Loaders = () => {
  return (
    <>
      <div className="loader">
        <span style={{'--i':1}}>
          <i>L</i>
        </span>
        <span style={{'--i':2}}>
          <i>o</i>
        </span>
        <span style={{'--i':3}}>
          <i>a</i>
        </span>
        <span style={{'--i':4}}>
          <i>d</i>
        </span>
        <span style={{'--i':5}}>
          <i>i</i>
        </span>
        <span style={{'--i':6}}>
          <i>n</i>
        </span>
        <span style={{'--i':7}}>
          <i>g</i>
        </span>
        <span style={{'--i':8}}>
          <i>.</i>
        </span>
        <span style={{'--i':9}}>
          <i>.</i>
        </span>
      </div>
    </>
  );
};
