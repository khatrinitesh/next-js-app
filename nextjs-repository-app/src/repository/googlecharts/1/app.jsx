import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

const CustomApp = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default CustomApp;

const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-3/4 max-w-screen-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
          <div className="h-96">
          <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
          </div>
        </div>
      </div>
    </>
  );
};
