import React, { useState } from "react";
import "./style.css";

const CanvasMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="app">
      <button onClick={toggleMenu}>Toggle Menu</button>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className="content">
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
        <p>Laborum anim ullamco et cillum nisi labore aliqua eu amet do.</p>
      </div>
    </div>
  );
};

export default CanvasMenu;
