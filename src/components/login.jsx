import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      setSubmittedData(data);
      reset();
      console.log("Logged In:", data);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 underline">
          Smart Bazaar
        </h1>
        <p className="text-sm sm:text-base text-gray-500 text-center mt-1">
          {submittedData ? "Login Successful!" : "Welcome back! Please login to your account."}
        </p>

        {submittedData ? (
          <div className="mt-6 text-center animate-fade-in">
            <div className="bg-green-50 border border-green-300 rounded-xl p-4 sm:p-6 shadow-inner break-words">
              <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">
                🎉 Welcome, {submittedData.email.split("@")[0]}!
              </h2>
              <p className="text-gray-700 mb-2 break-words">
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p className="text-gray-600 mb-4 break-words">
                You have logged in successfully.
              </p>
              <Link
                to="/"
                className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
              >
                Go to Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 break-words"
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 border rounded-lg py-2 hover:bg-gray-50 transition">
                <i className="fab fa-google text-red-500 mr-2"></i> Google
              </button>
              <button className="flex-1 border rounded-lg py-2 hover:bg-gray-50 transition">
                <i className="fab fa-facebook-f text-blue-600 mr-2"></i> Facebook
              </button>
            </div>

            {/* Signup Redirect */}
            <p className="text-sm text-gray-600 text-center mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
