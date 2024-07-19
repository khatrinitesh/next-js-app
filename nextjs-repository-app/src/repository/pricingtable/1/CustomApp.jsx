import React  from "react";
import PricingTable from "./PricingTable";

const CustomApp = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Pricing</h1>
        <PricingTable />
      </div>
    </>
  );
};

export default CustomApp;
