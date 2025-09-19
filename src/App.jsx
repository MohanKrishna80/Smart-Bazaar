import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ecart from "./components/ecart";
import NavBar from "./components/navBar";
import ProductDetails from "./components/productDetails"; 
import SettingsPage from "./components/settings";
import AccountPage from "./components/account";
import CartPage from "./components/cart";
import Login from "./components/login";
import Signup from "./components/SignUp";
import BuyPage from "./components/buyPage"; 

function App() {
  return (
   
      <div className="overflow-hidden bg-purple-600 h-full w-full">
        <NavBar />
        <Routes>
          <Route path="/" element={<Ecart />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/buy/:id" element={<BuyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/prodDetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    
  );
}

export default App;

