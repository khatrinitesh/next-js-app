import React from "react";
import { Element } from "react-scroll";

const SectionApp = () => {
  const DataMapSection = [
    { id: "Section 1", content: "Section 1 Content" },
    { id: "Section 2", content: "Section 2 Content" },
  ];

  return (
    <>
     {DataMapSection.map((section) => (
        <Element name={section.id} className="element">
          <section key={section.id} id={section.id}>
            <h2 className="font-bold text-[32px]">{section.id}</h2>
            <p className="text-[16px]">{section.content}</p>
          </section>
        </Element>
      ))}
    </>
  )
};

export default SectionApp;
