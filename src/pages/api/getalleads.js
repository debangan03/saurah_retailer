import conndb from "../../../middlewire/mongoose";
import LoanApplication from "../../../models/LoanApply";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
        const retailerId=req.body.retailerId;
      const loanApplications = await LoanApplication.find({ retailerId: retailerId });

      res.status(201).json(loanApplications);
    } catch (err) {
      console.error("Error creating loan application:", err);
      throw err;
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
export default conndb(handler);