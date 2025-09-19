import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Buy({ product, quantity: initialQty = 1 }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");
  const [quantity, setQuantity] = useState(initialQty);

  useEffect(() => {
    if (product) setOpen(true);
  }, [product]);

  if (!product) return <div className="loader"></div>;

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = product.price * quantity*0.3;

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Purchase</h2>

            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-64 object-contain rounded"
            />

            <div className="flex gap-2 overflow-x-auto mt-2">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title}-${i}`}
                  className={`w-16 h-16 object-contain rounded cursor-pointer border ${
                    selectedImage === img ? "border-purple-600" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>

            {/* Quantity selector */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 border border-gray-500 rounded hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-1 border border-gray-500 rounded">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 border border-gray-500 rounded hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <p className="text-purple-600 font-bold text-xl mt-2">
              Total: ₹{totalPrice}
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`✅ Purchase Successful\nQuantity: ${quantity}\nTotal: ₹${totalPrice}`);
                  navigate("/");
                }}
                className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
