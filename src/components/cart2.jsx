import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loader.css";

export default function Cart2() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const CartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(CartItems);

    const initialQuantities = {};
    CartItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    const { [id]: _, ...rest } = quantities;
    setQuantities(rest);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, type) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const newQty = type === "inc" ? current + 1 : Math.max(current - 1, 1);
      return { ...prev, [id]: newQty };
    });
  };

  const goHome = () => navigate(`/`);
  const goToSettings = () => navigate(`/settings`);
  const goToBuy = (item) => {
    const qty = quantities[item.id] || 1;
    navigate(`/buy/${item.id}`, { state: { product: item, quantity: qty } });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold">Oops...! Your Cart is Empty</h2>
        <button
          onClick={goHome}
          className="bg-indigo-600 text-white rounded px-3 py-1.5 mt-4"
        >
          Add Something
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-4 w-full max-w-7xl">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center bg-gray-200 p-4 rounded shadow"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-30 w-30 object-cover rounded"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">
                  ₹{item.price * (quantities[item.id] || 1)}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => goToBuy(item)}
                className="bg-teal-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-teal-400 transition"
              >
                Buy
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-6 py-2 rounded shadow-md hover:bg-red-400 transition"
              >
                Remove
              </button>

              <button
                onClick={() => navigate(`/prodDetails/${item.id}`)}
                className="bg-purple-600 text-white px-6 py-2 rounded shadow-md hover:bg-purple-500 transition"
              >
                View
              </button>
            </div>
          </div>
        ))}

        <div className="flex mt-8 gap-6 justify-center">
          <button
            onClick={goHome}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-500 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={goToSettings}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-500 transition-colors duration-300"
          >
            Settings
          </button>
          
        </div>
      </div>
    </div>
  );
}
