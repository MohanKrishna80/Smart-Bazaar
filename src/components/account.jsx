import React from "react";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  function goToSettings() {
    navigate("/settings");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-purple-800 p-6">
      
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        
        
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg">
          <img
            src="/mohan2.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

      
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Mohan Krishna</h1>

        
        <p className="text-indigo-600 mb-6">Front End Dev</p>

       
        <div className="flex flex-col gap-4 w-full text-gray-700">
          <div className="flex items-center justify-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-600">mohankrishna@email.com</span>
          </div>
          <div className="flex items-center justify-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-600">+91 9553391580</span>
          </div>
          <div className="flex items-center justify-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-600">Yemmiganur, Kurnool, AP, India</span>
          </div>
        </div>

        
        <div className="flex mt-8 gap-4 w-full">
          <button
            onClick={goHome}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-500 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={goToSettings}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-500 transition-colors duration-300"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
