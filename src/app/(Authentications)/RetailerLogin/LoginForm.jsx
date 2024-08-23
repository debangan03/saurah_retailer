// pages/login.js
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Logging in...", { id: "login-toast" });

    try {
      const {data} = await axios.post("/api/retailerlogin", formData);
      if (data.success) {
        toast.success("Login successful!", { id: "login-toast" });
        // You can redirect to a different page after successful login
        localStorage.setItem('token',data.token)
        window.location="/RetailerDashboard";
      } else {
        toast.error("Invalid email or password. Please try again.", {
          id: "login-toast",
        });
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", { id: "login-toast" });
      console.error("Login error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 lg:my-20 p-8 border shadow-md border-gray-400 rounded-lg">
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-xl font-semibold">Retailer Login</h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
          placeholder="fill your credentials"
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
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
          placeholder="fill your credentials"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <p className="text-[.8rem]">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-teal-500 underline"
            href="/RetailerSignup"
          >
            Register
          </Link>
        </p>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
