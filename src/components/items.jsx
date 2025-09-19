import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Prod from "./prod";
import "./loader.css"

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Items() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        const items = response.data.products;
        const shuffledItems = shuffleArray(items);
        setProducts(shuffledItems);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    }
    loadItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {products && products.length > 0 ? (
        products.map((product) => <Prod key={product.id} product={product} />)
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
