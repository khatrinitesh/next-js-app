import React, { useState,useEffect } from "react";

const Example = () => {
    const [sectionCount, setSectionCount] = useState(0);
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        setSectionCount(sections.length);
      }, []);
  return (
    <>
     <div className="text-center my-4">
      <p className="text-[red] font-bold text-[32px]">Total Sections: {sectionCount}</p>
    </div>
    </>
  )
};

export default Example;
