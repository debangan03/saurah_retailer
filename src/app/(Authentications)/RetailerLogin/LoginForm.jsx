"use client";
import Link from "next/link";
import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add your code here to submit this data to a backend or API
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-8 border shadow-md border-gray-400  rounded-lg  ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold ">Retailer Login</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="panNo"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        {/* <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                        OTP
                    </label>
                    <input
                        type="text"
                        name="otp"
                        id="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                </div> */}
        <p className="text-[.8rem]">
          Don&apos;have an account{" "}
          <Link
            className="font-semibold text-teal-500 underline "
            href="/RetailerSignup"
          >
            Register
          </Link>
        </p>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
