import React  from "react";
import './style.css';
import { pricingOptions } from "./constants";

const PricingTable = () => {
  return (
    <div className="flex justify-center">
      {pricingOptions.map(option => (
        <div key={option.name} className="bg-gray-200 p-4 m-4 rounded-lg">
            <h2 className="text-xl font-semibold">{option.name}</h2>
            <p className="text-3xl font-bold">{option.price}</p>
            <ul className="mt-4">
                {option.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                        <span className="inline-block w-4 h-4 bg-blue-500 mr-2 rounded-full"></span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
