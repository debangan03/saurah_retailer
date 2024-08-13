"use client";
import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";
import dummyProfilePic from "../../assets/myaccount.png";
import { IoArrowDownCircleOutline,IoArrowUpCircleOutline  } from "react-icons/io5";

const LeadsPage = () => {
  const fetchedLeads = [
    {
      id: 1,
      name: "John Doe",
      maskedPan: "XXXX-XXXX-XXXX-1234",
      askedAmount: "$10,000",
      applicationDate: "2023-07-01",
      status: "new",
      kwApplied: "5 KW",
      avgElectricityBill: "$100",
      address: "123 Main St, City, Country",
      rejectionReason: "",
      loanTenure: "5 years",
      installationProposal: "/proposal-link-1",
    },
    {
      id: 2,
      name: "Jane Smith",
      maskedPan: "XXXX-XXXX-XXXX-5678",
      askedAmount: "$5,000",
      applicationDate: "2023-07-15",
      status: "contacted",
      kwApplied: "3 KW",
      avgElectricityBill: "$60",
      address: "456 Another St, City, Country",
      rejectionReason: "",
      loanTenure: "3 years",
      installationProposal: "/proposal-link-2",
    },
  ];
  const [leads, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [minfilterValue, setminfilterValue] = useState("");
  const [maxfilterValue, setmaxfilterValue] = useState("")
  useEffect(() => {
    // Fetch leads data from API or database
    setLeads(fetchedLeads);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterclear=()=>{
    setLeads(fetchedLeads);
    setFilterModalOpen(false);
  }

  const handleStatusChange = (id, status) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status } : lead
      )
    );
  };

  const handleFilterOpen = () => {
    setFilterModalOpen(true);
  };

  const handleFilterApply = () => {
    setLeads(fetchedLeads);
    console.log(minfilterValue,maxfilterValue)
    // Apply the selected filter
    if (selectedFilter && filterValue) {
      setLeads((prevLeads) =>
        prevLeads.filter((lead) => {
          if (selectedFilter === "Date") {
            return lead.applicationDate.includes(filterValue);
          } else if (selectedFilter === "Status") {
            return lead.status.toLowerCase().includes(filterValue.toLowerCase());
          } else if (selectedFilter === "Name") {
            return lead.name.toLowerCase().includes(filterValue.toLowerCase());
          } else if (selectedFilter === "Amount Range") {
            
            const askedAmount = parseFloat(lead.askedAmount.replace(/[$,]/g, ""));
            console.log(askedAmount >= parseFloat(minfilterValue) && askedAmount <= parseFloat(maxfilterValue))
            return askedAmount >= parseFloat(minfilterValue) && askedAmount <= parseFloat(maxfilterValue);
          }
          return true;
        })
      );
    }
    setFilterModalOpen(false);
  };

  const handleRowExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredLeads = leads?.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.maskedPan.includes(searchTerm) ||
      lead.askedAmount.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-transparent p-8">
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
          <button
            onClick={handleFilterOpen}
            className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Masked PAN
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asked Amount
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Application Date
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <React.Fragment key={lead.id}>
                  <tr
                    className={`cursor-pointer ${expandedRow === lead.id?"bg-green-100":"bg-transparent"}`}
                    
                  >
                    <td className="px-6 py-4">{lead.name}</td>
                    <td className="px-6 py-4">{lead.maskedPan}</td>
                    <td className="px-6 py-4">{lead.askedAmount}</td>
                    <td className="px-6 py-4">{lead.applicationDate}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          lead.status === "contacted"
                            ? "bg-green-100 text-green-800"
                            : lead.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                        onClick={() =>
                          setLeads((prevLeads) =>
                            prevLeads.map((l) =>
                              l.id === lead.id
                                ? { ...l, status: "contacted" }
                                : l
                            )
                          )
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        onClick={() =>
                          setLeads((prevLeads) =>
                            prevLeads.map((l) =>
                              l.id === lead.id
                                ? { ...l, status: "rejected" }
                                : l
                            )
                          )
                        }
                      >
                        Reject
                      </button>
                      {/* onclick */}
                       <span className="flex items-center ml-10  rounded-full text-3xl" onClick={() => handleRowExpand(lead.id)}>{expandedRow === lead.id ? <IoArrowUpCircleOutline/>:<IoArrowDownCircleOutline />}</span>
                    </td>
                  </tr>
                  {expandedRow === lead.id && (
                    <tr className="bg-green-100">
                      <td colSpan="6" className="px-6 py-4 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <p>
                              <strong>KW Applied:</strong> {lead.kwApplied}
                            </p>
                            <p>
                              <strong>Avg Electricity Bill:</strong>{" "}
                              {lead.avgElectricityBill}
                            </p>
                            <p>
                              <strong>Address:</strong> {lead.address}
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong>Rejection Reason:</strong>{" "}
                              {lead.rejectionReason || "N/A"}
                            </p>
                            <p>
                              <strong>Loan Tenure:</strong> {lead.loanTenure}
                            </p>
                            <p>
                              <strong>
                                <a
                                  href={lead.installationProposal}
                                  className="text-teal-500 underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link to Installation Proposal
                                </a>
                              </strong>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {filterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold ">Select Filter</h2>
            <button type="button" className="px-2 py-1 border border-gray-700 rounded-md " onClick={handleFilterclear}>Clear filters</button>
            </div>
            <div className="mb-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="">Choose Filter Type</option>
                <option value="Date">Date</option>
                <option value="Status">Status</option>
                <option value="Name">Name</option>
                <option value="Amount Range">Amount Range</option>
              </select>
            </div>
            <div className="mb-4">
              {selectedFilter === "Amount Range" ? (
                <div className="flex justify-center items-center space-x-4">
                <input
                  type="text"
                  value={minfilterValue}
                  onChange={(e) => setminfilterValue(e.target.value)}
                  placeholder="Min amount"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                <input
                  type="text"
                  value={maxfilterValue}
                  onChange={(e) => setmaxfilterValue(e.target.value)}
                  placeholder="Max amount"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                </div>
              ) : (
                <input
                  type="text"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder={`Enter ${selectedFilter}`}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleFilterApply}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg mr-2"
              >
                Apply
              </button>
              <button
                onClick={() => setFilterModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;
