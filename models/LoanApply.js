// models/LoanApplication.js

import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema({
  retailerId: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  panNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  electricityAccountNo: {
    type: String,
    required: true,
  },
  electricityBill: {
    type: String,
    required: true,
  },
  amountForLoan: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

const LoanApplication = mongoose.models.LoanApplication||mongoose.model('LoanApplication', loanApplicationSchema);

export default LoanApplication;