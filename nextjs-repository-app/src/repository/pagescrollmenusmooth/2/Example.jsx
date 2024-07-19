import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
// import "./style.css";

const Example = () => {
     // Create a ref for the second section
  const secondSectionRef = useRef(null);

  // Function to handle scrolling to the next section
  const scrollToNextSection = () => {
    // Scroll to the second section
    secondSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
       {/* First section */}
       <section className="h-screen flex flex-col justify-center items-center bg-gray-200">
        <SectionTitle title="Section 1" desc="This is first section"/>
        {/* Button to scroll to the next section */}
        <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={scrollToNextSection}
        >
        Scroll to Section 2
        </button>
      </section>

      {/* Second section */}
      <section
        ref={secondSectionRef}
        className="h-screen flex justify-center items-center bg-gray-300"
      >
        <SectionTitle title="Section 2" desc="This is second section"/>
      </section>
    </>
  );
};

export default Example;
