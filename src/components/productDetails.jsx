import React, { useEffect, useState } from "react";
import axios from "axios";
import ProdCourosel from "./prodCourosel";
import { useParams, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./loader.css";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function goHome() {
    navigate(`/`);
  }

  function goToBuy() {
    navigate(`/buy/${id}`, { state: { product } });
  }

  function AddCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (id) {
          let res = await axios.get(`https://dummyjson.com/products/${id}`);
          setProduct(res.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-white flex h-[100vh] mt-10 shadow-lg rounded overflow-hidden">
      <div className="flex justify-center items-center w-1/2 p-4 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 rounded-l-xl shadow-inner">
        <ProdCourosel images={product.images} />
      </div>

      <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 w-1/2 p-6 text-black rounded border border-gray-400 flex flex-col gap-3">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <h6 className="text-lg mb-2 flex items-center gap-1">
          <i className="fa-solid fa-indian-rupee-sign"></i>
          {Math.floor(product.price * 88*0.3)}/-
        </h6>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
          <h2 className="font-semibold mb-1">Product Description</h2>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
          <h2 className="font-semibold mb-1">Warranty</h2>
          <p className="text-sm text-gray-700">{product.warrantyInformation}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
          <h2 className="font-semibold mb-1">Shipping</h2>
          <p className="text-sm text-gray-700">{product.shippingInformation}</p>
        </div>

        <div
          className={`p-4 rounded-lg shadow-sm border border-gray-300 ${
            product.availabilityStatus === "Low Stock"
              ? "bg-yellow-50 text-yellow-600"
              : product.availabilityStatus === "No Stock"
              ? "bg-red-50 text-red-600"
              : "bg-green-50 text-green-600"
          }`}
        >
          <h2 className="font-semibold mb-1">Availability</h2>
          <p className="text-sm">{product.availabilityStatus}</p>
        </div>

        <div className="flex gap-4 items-center mt-2">
          <button
            onClick={goToBuy}
            className="bg-purple-800 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Buy Now
          </button>

          <button
            onClick={AddCart}
            className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-400 transition"
          >
            Add to Cart
          </button>

          {added && <span className="text-green-600"> Added </span>}
        </div>

        <hr className="my-3" />

        <button
          onClick={goHome}
          className="bg-black w-fit text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
