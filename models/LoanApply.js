// models/LoanApplication.js

import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema(
  {
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
    electricityProvider: {
      type: String,
      required: true,
    },
    unitCharges: {
      type: String,
      required: true,
    },
    baseCharges: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const LoanApplication =
  mongoose.models.LoanApplication ||
  mongoose.model("LoanApplication", loanApplicationSchema);

export default LoanApplication;
