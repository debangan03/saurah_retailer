// pages/api/loanApplications.js
import conndb from "../../../middlewire/mongoose";
import LoanApplication from "../../../models/LoanApply";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
       // Connect to MongoDB database

      const {
        retailerId,
        customerName,
        email,
        phone,
        panNo,
        address,
        electricityAccountNo,
        electricityBill,
        amountForLoan,
      } = req.body;

      const newApplication = new LoanApplication({
        retailerId,
        customerName,
        email,
        phone,
        panNo,
        address,
        electricityAccountNo,
        electricityBill,
        amountForLoan,
      });

      await newApplication.save();

      res
        .status(201)
        .json({ message: "Loan application submitted successfully" });
    } catch (error) {
      console.error("Error submitting loan application:", error);
      res.status(500).json({ message: "Failed to submit loan application" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
export default conndb(handler)