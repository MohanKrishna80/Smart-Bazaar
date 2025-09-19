import React from "react";
import NavBar from "./navBar";
import Courosel from "./courusel";
import Items from "./items";
import CartPage from "./cart";
import Footer from "./footer";
import Login from "./login";
import Signup from "./SignUp";
import BuyPopup from "./buy";

function Ecart() {
  return (
    <div className="w-screen">
      
   
      <Courosel />
      <Items />
      <Footer />
    </div>
  );
}
export default Ecart;
