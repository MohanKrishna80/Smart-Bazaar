import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Prod({ product }) {
  const navigate = useNavigate();

  function goToBuy() {
    navigate(`/buy/${product.id}`, { state: { product } });
  }

  return (
    <div className="h-89 w-70 bg-white rounded-xl border border-gray-300 shadow-sm hover:shadow-lg transition p-2">
      <Link to={`/prodDetails/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-50 w-50 mx-auto"
        />
        <h1 className="text-blue-500 font-bold text-center mt-2">{product.title}</h1>
      </Link>

      <p className="ml-5 pl-3 pr-3 py-1 rounded-full w-max bg-yellow-300 text-yellow-900 font-semibold text-sm shadow-sm">
        {product.discountPercentage}% Discount
      </p>

      <div className="flex justify-between items-center mt-3">
        <button
          onClick={goToBuy}
          className="bg-purple-900 text-white rounded-md px-6 py-2 hover:bg-purple-700"
        >
          Buy
        </button>

        <p className="bg-blue-50 border border-gray-400 rounded-md px-6 py-2 flex items-center gap-1">
          Price: <i className="fa-solid fa-indian-rupee-sign"></i>
          <b>{Math.floor(product.price * 88 * 0.3)}/-</b>
        </p>
      </div>
    </div>
  );
}
