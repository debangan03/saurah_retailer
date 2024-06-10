"use client"
import React, { useState } from 'react';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    retailerId: '',
    customerName: '',
    email: '',
    phone: '',
    electricityAccountNo: '',
    electricityBill: 'Last Bill: $120.50', // Example readonly field
    amountForLoan: '1000' // Example readonly field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen transparent flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-teal-500 mb-6 text-center">Apply for a Loan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="retailerId" className="block text-gray-700">Retailer ID</label>
            <input
              type="text"
              id="retailerId"
              name="retailerId"
              value={formData.retailerId}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="electricityAccountNo" className="block text-gray-700">Electricity Account No.</label>
            <input
              type="text"
              id="electricityAccountNo"
              name="electricityAccountNo"
              value={formData.electricityAccountNo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Electricity Bill</label>
            <div className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100">
              {formData.electricityBill}
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Amount for Loan</label>
            <input
              type="number"
              id="amountForLoan"
              name="amountForLoan"
              value={formData.amountForLoan}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white p-2 rounded-md font-semibold hover:bg-teal-600"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
