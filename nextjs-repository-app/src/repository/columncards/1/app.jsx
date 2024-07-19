import React from "react";

const CustomApp = () => {
  return (
    <>
    <div className="container mx-auto">
      <div className="flex justify-between">
      <ColumnCard
            title="Card 1"
            desc="desc for Card 1"
            imgUrl="https://via.placeholder.com/300"
          />
          <ColumnCard
            title="Card 2"
            desc="desc for Card 2"
            imgUrl="https://via.placeholder.com/300"
          />
          <ColumnCard
            title="Card 3"
            desc="desc for Card 3"
            imgUrl="https://via.placeholder.com/300"
          />
      </div>
    </div>
    </>
  );
};

export default CustomApp;

const ColumnCard = ({ title, desc, imgUrl }) => {
  return (
    <>
      <div className="flex-grow max-w-sm rounded overflow-hidden shadow-lg ">
        <img className="w-full" src={imgUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
      </div>
    </>
  );
};
