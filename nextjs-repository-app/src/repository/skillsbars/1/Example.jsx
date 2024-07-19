import React from "react";
// import "./style.css";

const Example = ({ skills }) => {
  return (
    <>
      <div className="w-full">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm font-semibold">{skill.name}</p>
            <div className="h-3 bg-gray-200 rounded-full">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Example;
