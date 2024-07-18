"use client";

import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
  // const images = [
  //   {
  //     src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  //     alt: "image1",
  //   },
  //   {
  //     src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  //     alt: "image2",
  //   },
  //   {
  //     src: "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  //     alt: "image3",
  //   },
  // ];

  return (
    <>
      <div className="bg-img">
        <form action="/action_page.php" className="container">
          <h1>Login</h1>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomApp;
