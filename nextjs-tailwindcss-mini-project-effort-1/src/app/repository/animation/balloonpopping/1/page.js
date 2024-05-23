"use client"
import React, { useEffect } from 'react';

const CustomApp = () => {
  const palette = ["#eb4d4b", "#badc58", "#f9ca24", "#22a6b3"];

  const random = (min = 0, max = 10) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getBalloonStyle = () =>
    `transform: rotate(${Math.floor(random(-15, 15) * 1.25)}deg);
    translateX(${random(-window.innerWidth / 2, window.innerWidth)}px);
    translateY(${random(-100, 100)}px);
    color: ${palette[random(0, palette.length - 1)]};`;

  const createElement = (type, { style = "", ...props }) => {
    const el = Object.assign(document.createElement(type), props);
    if (typeof style === "object") {
      Object.assign(el.style, style);
    } else if (style.length) {
      el.style.cssText = style;
    }
    return el;
  };

  const unpopBalloons = () => {
    document.querySelectorAll(".popped").forEach((e) => {
      e.classList.remove("popped");
      e.style.cssText = "";
    });
  };

  const partyTime = () => {
    let numberOfBalloons = (window.innerWidth / 80) * 3;
    const livingroom = document.getElementById("living-room");

    for (let i = 0; i < numberOfBalloons; i++) {
      const balloon = createElement("div", {
        className: "balloon",
        style: getBalloonStyle(),
        dangerouslySetInnerHTML: {
          __html: `<div class="helium"><div class="knot"><div class="string"></div></div></div>`
        }
      });
      livingroom.appendChild(balloon);

      balloon.addEventListener("click", function (ev) {
        Object.assign(ev.target.style, {
          transition: `all ${random(200, 800)}ms`
        });
        ev.target.classList.add("popped");
      });
    }
  };

  useEffect(() => {
    partyTime();
  }, []);

  return (
    <div>
      {/* Assuming you have an element with id="living-room" in your JSX */}
      <div id="living-room"></div>
      {/* Add a button or trigger to unpop the balloons */}
      {/* <button onClick={unpopBalloons}>Unpop Balloons</button> */}
    </div>
  );
};

export default CustomApp;
