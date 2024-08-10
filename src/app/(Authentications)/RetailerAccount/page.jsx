"use client";
import { useAuth } from "@/app/Context/AuthContext";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";

function MyAccount() {
  const { user } = useAuth();
  if (!user) return <>Loading</>;
  console.log(user);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save profile logic here
    toast.success("Profile updated successfully");
    setEditable(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-4 bg-white rounded-md shadow-md">
      <Toaster />
      <div className="flex items-center space-x-4">
        <div className="text-6xl text-teal-500">
          <MdAccountCircle />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-700">
            {"Hi!  " + " " + formData.name}{" "}
            <span className="text-[0.6rem] font-normal     underline italic">
              {" "}
              (id = {user.id})
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={!editable}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!editable}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!editable}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!editable}
            className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-teal-300"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-teal-500 text-white rounded-md"
          >
            {editable ? "Cancel" : "Edit Profile"}
          </button>
          {editable && (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-700">Applied Loans</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 border rounded-md">Loan #1 - $10,000</li>
          <li className="p-2 border rounded-md">Loan #2 - $5,000</li>
          {/* Add more loan details here */}
        </ul>
      </div>
    </div>
  );
}

export default MyAccount;
