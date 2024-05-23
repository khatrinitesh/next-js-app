import React from "react";
import { featureBoxes } from "../constants/constants";

const Feature = () => {
  return (
    <div className="feature-1 py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="flex -mx-4">
          <div className="px-4 text-center md:w-10/12 xl:w-8/12 mx-auto">
            <h1 className="mb-4 text-4xl font-bold dark:text-white text-primaryD">FWR Blocks features</h1>
            <p className="mb-4 text-xl dark:text-white text-primaryD">
              The main aim of creating FWR blocks is to help designers,
              developers and agencies create websites and web apps quickly and
              easily. Each and every block uses minimal custom styling and is
              based on the utility first Tailwind framework.
            </p>
            <button className="border-2 border-solid border-defaultgreen hover:border-hovergreen bg-defaultgreen hover:bg-hovergreen rounded py-2 px-12 text-xl text-white mt-4 transition-color duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:flex md:-mx-4 mt-12 md:pt-4">
          {/* Map over the featureBoxes array to render each feature box */}
          {featureBoxes.map((box) => (
            <div key={box.id} className="px-4 md:w-1/3 mt-6 md:mt-0">
              <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
                <div className="text-xl p-4 w-16 h-16 mx-auto">
                  <i className={box.icon + " text-indigo-600"}></i>
                </div>
                <h5 className="text-xl font-bold mb-4 dark:text-white text-primaryD">{box.title}</h5>
                <p className="mb-3 dark:text-white text-primaryD">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;