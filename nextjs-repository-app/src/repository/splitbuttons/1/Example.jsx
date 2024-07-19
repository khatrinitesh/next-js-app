import React, { useState, useEffect } from "react";
import "./style.css";

const Example = ({ primaryAction, secondaryActions }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="split-button">
        <button onClick={primaryAction} className="primary-button">
          Primary Action
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="secondary-button"
        >
          <svg className="arrow" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 16a.75.75 0 01-.53-.22l-4.25-4.25a.75.75 0 011.06-1.06L10 13.44l3.72-3.97a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-.53.22z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {showMenu && (
          <div className="dropdown-menu">
            {secondaryActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="dropdown-item"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Example;
