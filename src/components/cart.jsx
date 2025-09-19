import React, { useEffect, useState } from "react";
import axios from "axios";

import Cart2 from "./cart2";
import { useParams, useNavigate } from "react-router-dom";
import "./loader.css"

export default function CartPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();



  useEffect(() => {
  async function fetchProduct() {
    try {
      if (id) {
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } else {
        setProduct(null); 
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }
  fetchProduct();
}, [id]);



  if (!product) {
    return (
      <div className="flex justify-center bg-amber-300 items-center h-screen">
     <div className="loader"></div>
      </div>
    );
  }

    return(
        <div>

            <Cart2 images={product.images} product={product}/>
           
            
        </div>
    )
}

