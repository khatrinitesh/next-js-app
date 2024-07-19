import React from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <MaterialInput />
    </>
  );
};

export default CustomApp;

const MaterialInput = () => {
  return (
    <div className="container">
      <h2>Material input CSS</h2>
      <form>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="text" required />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
      </form>
    </div>
  );
};
