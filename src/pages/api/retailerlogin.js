// pages/api/login.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import conndb from "../../../middlewire/mongoose";
import Retailer from "../../../models/Retailer";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Find user by email
  const user = await Retailer.findOne({ email: email });

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log(isPasswordValid);

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Create JWT token
  const token = jwt.sign(
    { id: user._id, email: user.email, name: user.name, phone: user.mobileNo },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.status(200).json({ success: true, token });
};
export default conndb(handler);
