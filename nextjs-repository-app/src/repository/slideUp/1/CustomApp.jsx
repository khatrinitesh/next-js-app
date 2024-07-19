import React from "react";
import Example from "./Example";

const CustomApp = () => {
    const skills = [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 50 },
      ];
    
  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Skills</h1>
    <Example skills={skills} />
    </>
  );
};

export default CustomApp;
