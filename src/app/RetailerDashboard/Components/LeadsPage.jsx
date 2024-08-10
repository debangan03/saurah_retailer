"use client";
import React, { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaCheck, FaTimes } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";
import dummyProfilePic from "../../assets/myaccount.png";

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch leads data from API or database
    const fetchedLeads = [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        status: "new",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "098-765-4321",
        status: "contacted",
      },
    ];
    setLeads(fetchedLeads);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (id, status) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Leads</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-full py-2 px-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Search leads..."
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={dummyProfilePic}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{lead.name}</h3>
                <p className="text-gray-600 flex items-center mt-2">
                  <AiOutlineMail className="mr-2" /> {lead.email}
                </p>
                <p className="text-gray-600 flex items-center mt-2">
                  <AiOutlinePhone className="mr-2" /> {lead.phone}
                </p>
                <div className="flex space-x-4 mt-4">
                  <button
                    className={`px-4 py-2 rounded-full ${
                      lead.status === "contacted"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => handleStatusChange(lead.id, "contacted")}
                  >
                    Contacted
                  </button>
                  <button
                    className={`px-4 py-2 rounded-full ${
                      lead.status === "rejected"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => handleStatusChange(lead.id, "rejected")}
                  >
                    Rejected
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
