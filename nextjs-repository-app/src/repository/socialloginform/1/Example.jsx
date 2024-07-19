import React, { useState, useEffect } from "react";
import "./style.css";

const Example = () => {
      // Function to handle login with Google
  const handleGoogleLogin = () => {
    // Implement login with Google logic here
    console.log('Logging in with Google...');
  };

  // Function to handle login with Facebook
  const handleFacebookLogin = () => {
    // Implement login with Facebook logic here
    console.log('Logging in with Facebook...');
  };
  
  return (
    <>
       <div className="container">
      <h1 className="text-2xl font-bold mb-4">Social Login</h1>
      <div className="social-buttons">
        <button onClick={handleGoogleLogin} className="google-button">
          <span className="icon">
            <i className="fab fa-google"></i>
          </span>
          <span>Log in with Google</span>
        </button>
        <button onClick={handleFacebookLogin} className="facebook-button">
          <span className="icon">
            <i className="fab fa-facebook"></i>
          </span>
          <span>Log in with Facebook</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Example;
