import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Prod from "./prod";
import "./loader.css";
import { useSelector } from "react-redux";

export default function Items() {
  const [products, setProducts] = useState([]);

  const searchText = useSelector((state) => state.search);

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        const items = response.data.products;

        setProducts(items);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    }
    loadItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {products && products.length > 0 ? (
        products
          .filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((product) => <Prod key={product.id} product={product} />)
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
