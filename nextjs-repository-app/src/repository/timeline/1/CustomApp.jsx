import React from "react";
import Example from "./Example";

const CustomApp = () => {
    const events = [
        { date: 'January 2022', description: 'Event 1 description' },
        { date: 'March 2022', description: 'Event 2 description' },
        { date: 'June 2022', description: 'Event 3 description' },
        // Add more events as needed
      ];

  return (
    <>
      <div className="max-w-xl mx-auto">
      <Example events={events} />
    </div>
    </>
  );
};

export default CustomApp;
