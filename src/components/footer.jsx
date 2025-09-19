import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">MyProduct</h2>
          <p className="mt-3 text-sm text-gray-400">
            Premium quality products built to make your life easier.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-white">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/new" className="hover:text-blue-400">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="/best-sellers" className="hover:text-blue-400">
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-blue-400">
                Special Offers
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/settings" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-400">support@myproduct.com</p>
          <p className="text-sm text-gray-400">+91 98765 43210</p>

          <div className="flex space-x-4 mt-4">
            <Link
              to="#"
              className=" hover:text-blue-500 transform transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </Link>

            <Link
              to="#"
              className="hover:text-pink-500 transform transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-blue-400 transform transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-twitter text-xl"></i>
            </Link>
            <Link
              to="#"
              className="hover:text-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-125"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        MyProduct. All rights reserved.
      </div>
    </footer>
  );
}
