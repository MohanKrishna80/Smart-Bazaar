import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const [registeredUser, setRegisteredUser] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      setRegisteredUser(data);
      reset();
      console.log("User Registered:", data);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-500 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 underline">
          Smart Bazaar
        </h1>
        <p className="text-sm sm:text-base text-gray-500 text-center mt-1">
          {registeredUser
            ? "Registration Successful!"
            : "Create your account to get started"}
        </p>

        {registeredUser ? (
          <div className="mt-6 text-center animate-fade-in">
            <div className="bg-green-50 border border-green-300 rounded-xl p-4 sm:p-6 shadow-inner break-words">
              <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-3 sm:mb-4">
                 Welcome, {registeredUser.name}!
              </h2>
              <p className="text-gray-700 mb-2 break-words">
                <strong>Email:</strong> {registeredUser.email}
              </p>
              <p className="text-gray-600 mb-4 break-words">
                Your account has been created successfully.
              </p>
              <Link
                to="/login"
                className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
              >
                Go to Login
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
           
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

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

           
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

           
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                {...register("terms", { required: "You must accept the terms" })}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </Link>
              </span>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
              )}
            </div>

          
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>

            
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

           
            <div className="flex space-x-4">
              <button className="flex-1 border rounded-lg py-2 hover:bg-gray-50 transition">
                <i className="fab fa-google text-red-500 mr-2"></i> Google
              </button>
              <button className="flex-1 border rounded-lg py-2 hover:bg-gray-50 transition">
                <i className="fab fa-facebook-f text-blue-600 mr-2"></i> Facebook
              </button>
            </div>

         
            <p className="text-sm text-gray-600 text-center mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
