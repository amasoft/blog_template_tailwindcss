import React from "react";

const ProductCard = ({ name, price, description, onAddToCart }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <p className="text-gray-900 font-bold text-xl">${price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={onAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
