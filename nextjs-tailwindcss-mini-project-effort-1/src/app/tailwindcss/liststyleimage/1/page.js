import React from "react";

const TailwindCSSApp = () => {
  return (
    <div className="flex flex-col  h-screen">
        <ul className="list-checkmark bg-bgred">
            <li className="list-checkmark bg-gradient-conic">list item 1</li>
            <li className="list-checkmark">list item 2</li>
            <li className="list-checkmark">list item 3</li>
            <li className="list-checkmark">list item 4</li>
            <li className="list-checkmark">list item 5</li>
            <li className="list-checkmark">list item 6</li>
        </ul>
    </div>
  );
};

export default TailwindCSSApp;
