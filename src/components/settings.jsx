import React from "react";
import { useNavigate, Link } from "react-router-dom";

function SettingsPage() {
  const navigate = useNavigate();

  function Close() {
    navigate("/");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-fit bg-cover bg-center p-6"
      style={{

        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1683116663965-358574aec6a7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 w-full max-w-md text-center backdrop-blur-sm">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700">Settings</h1>

        <ul className="flex flex-col gap-5 text-lg text-gray-600 font-semibold">
          <Link to="/account">
            <li className="hover:text-violet-900 cursor-pointer transition-colors duration-200">
              Profile
            </li>
          </Link>
          <Link to={'/cart/1'}>
          <li className="hover:text-violet-900 cursor-pointer transition-colors duration-200">
            My Cart
          </li>
          </Link>
          <li className="hover:text-violet-900 cursor-pointer transition-colors duration-200">
            Notifications
          </li>
          <li className="hover:text-violet-900 cursor-pointer transition-colors duration-200">
            Contact Us
          </li>
        </ul>

        <button
          onClick={Close}
          className="mt-10 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SettingsPage;
