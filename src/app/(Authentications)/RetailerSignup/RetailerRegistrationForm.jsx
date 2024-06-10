"use client"
import Link from 'next/link';
import React, { useState } from 'react';

function RetailerRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        registrationNo: '',
        panNo: '',
        mobileNo: '',
        otp: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        // Add your code here to submit this data to a backend or API
    };

    return (
        <div className="max-w-lg mx-auto my-6 p-4 border shadow-md border-gray-400  rounded-lg  ">
            <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className='text-xl font-semibold '>Retailer Registration</h2>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Retailer Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="registrationNo" className="block text-sm font-medium text-gray-700">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        name="registrationNo"
                        id="registrationNo"
                        value={formData.registrationNo}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
                <div>
                    <label htmlFor="panNo" className="block text-sm font-medium text-gray-700">
                        PAN No
                    </label>
                    <input
                        type="text"
                        name="panNo"
                        id="panNo"
                        value={formData.panNo}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
                <div>
                    <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
                        Mobile No
                    </label>
                    <input
                        type="tel"
                        name="mobileNo"
                        id="mobileNo"
                        value={formData.mobileNo}
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
                  <p className='text-[.8rem] '>Already have an account <Link className='text-teal-500 underline font-semibold' href="/RetailerLogin">Login</Link></p>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RetailerRegistrationForm;
