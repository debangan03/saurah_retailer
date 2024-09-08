"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";

const LeadsPage = ({ leads }) => {
  const fetchedLeads = leads.map((lead) => ({
    id: lead._id,
    name: lead.customerName,
    maskedPan: "XXXX-XXXX-XXXX-" + lead.panNo.slice(-4), // Masking the PAN number
    askedAmount: `₹${lead.amountForLoan.toLocaleString()}`, // Formatting the amount
    applicationDate: new Date(lead.createdAt).toLocaleDateString(), // Formatting the date
    status: "new", // Assuming all leads start with a "new" status
    kwApplied: "10", // Assuming this information is not provided
    avgElectricityBill: lead.electricityBill,
    address: lead.address,
    rejectionReason: "N/A",
    loanTenure: "N/A", // Assuming this information is not provided
    installationProposal: "#", // Placeholder for the proposal link
  }));

  const [leadsState, setLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [minfilterValue, setminfilterValue] = useState("");
  const [maxfilterValue, setmaxfilterValue] = useState("");

  useEffect(() => {
    // Fetch leads data from API or database
    setLeads(fetchedLeads);
  }, [fetchedLeads]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterclear = () => {
    setLeads(fetchedLeads);
    setFilterModalOpen(false);
  };

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
    console.log(minfilterValue, maxfilterValue);
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

  const filteredLeads = leadsState.filter(
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
          <div className="flex flex-between space-x-4">
          <button
            onClick={handleFilterOpen}
            className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            + Add Lead
          </button>
          <button
            onClick={handleFilterOpen}
            className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <FaFilter className="mr-2" /> Filter
          </button>
          </div>
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
                    className={`cursor-pointer ${expandedRow === lead.id ? "bg-green-100" : "bg-transparent"}`}
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
                      {/* <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                        onClick={() =>
                          {setLeads((prevLeads) =>
                            prevLeads.map((l) =>
                              l.id === lead.id
                                ? { ...l, status: "contacted" }
                                : l
                            )
                          )
                          alert("loan accepted")
                        }
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        onClick={() =>
                          {setLeads((prevLeads) =>
                            prevLeads.map((l) =>
                              l.id === lead.id
                                ? { ...l, status: "rejected" }
                                : l
                            )
                          )
                          alert("loan rejected")}
                        }
                      >
                        Reject
                      </button> */}
                      <span
                        className="flex items-center rounded-full text-3xl"
                        onClick={() => handleRowExpand(lead.id)}
                      ><span className="text-sm">View&nbsp;</span>
                        {expandedRow === lead.id ? (
                          <IoArrowUpCircleOutline />
                        ) : (
                          <IoArrowDownCircleOutline />
                        )}
                      </span>
                    </td>
                  </tr>
                  {expandedRow === lead.id && (
                    <tr className="bg-green-100">
                      <td colSpan="6" className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <p>
                              <strong>KW Applied:</strong> {lead.kwApplied}
                            </p>
                            <p>
                              <strong>Avg Electricity Bill:</strong> {lead.avgElectricityBill}
                            </p>
                            <p>
                              <strong>Address:</strong> {lead.address}
                            </p>
                          </div>
                          <div>
                            <p>
                              <strong>Rejection Reason:</strong>{" "}
                              {lead.rejectionReason}
                            </p>
                            <p>
                              <strong>Loan Tenure:</strong> {lead.loanTenure}
                            </p>
                            <p>
                              <strong>Installation Proposal:</strong>{" "}
                              <a
                                href={lead.installationProposal}
                                className="text-blue-600 hover:underline"
                              >
                                View Proposal
                              </a>
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
      {/* Filter Modal */}
      {filterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Filter Leads</h2>
            <div className="mb-4">
              <label
                htmlFor="filter-type"
                className="block text-gray-700 font-semibold mb-2"
              >
                Filter by:
              </label>
              <select
                id="filter-type"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Name">Name</option>
                <option value="Status">Status</option>
                <option value="Date">Date</option>
                <option value="Amount Range">Amount Range</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="filter-value"
                className="block text-gray-700 font-semibold mb-2"
              >
                {selectedFilter === "Amount Range"
                  ? "Min Amount:"
                  : "Filter Value:"}
              </label>
              {selectedFilter === "Amount Range" ? (
                <>
                  <input
                    type="number"
                    id="min-filter-value"
                    value={minfilterValue}
                    onChange={(e) => setminfilterValue(e.target.value)}
                    className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
                    placeholder="Min Amount"
                  />
                  <label
                    htmlFor="max-filter-value"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Max Amount:
                  </label>
                  <input
                    type="number"
                    id="max-filter-value"
                    value={maxfilterValue}
                    onChange={(e) => setmaxfilterValue(e.target.value)}
                    className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Max Amount"
                  />
                </>
              ) : (
                <input
                  type="text"
                  id="filter-value"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter value"
                />
              )}
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleFilterclear}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Clear
              </button>
              <button
                onClick={handleFilterApply}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;
