import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Buy from "./buy";
import "./loader.css";

export default function BuyPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        {error}
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen text-red-600">
        Product not found
      </div>
    );

  
  return <Buy product={product} />;
}
