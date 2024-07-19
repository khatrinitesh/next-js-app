import React, { useState, useEffect } from "react";

import "./style.css";

const Example = ({text }) => {

    useEffect(() => {
        // Manipulate the text element after component mounts
        const textElement = document.getElementById("strokedText");
        const textContent = textElement.textContent;
        textElement.innerHTML = ""; // Clear the text content
        const letters = textContent.split("");
        const colors = ["red", "green", "blue", "yellow", "orange"]; // Define colors array
    
        letters.forEach((letter, index) => {
          const span = document.createElement("span");
          span.textContent = letter;
          span.className = "stroked-letter";
          span.style.color = colors[index % colors.length]; // Assign color based on index
          span.style.animationDelay = `${index * 0.1}s`; // Add animation delay
          textElement.appendChild(span);
        });
      }, [text]);

  return (
    <>
      <div id="strokedText" className="text-4xl font-bold text-center">{text}</div>
    </>
  );
};

export default Example;
