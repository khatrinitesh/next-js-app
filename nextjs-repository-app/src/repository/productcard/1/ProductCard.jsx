import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.username}</p>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xl font-bold">${product.phone}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
