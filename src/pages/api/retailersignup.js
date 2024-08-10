import conndb from "../../../middlewire/mongoose";
import Retailer from "../../../models/Retailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const newRetailer = new Retailer(req.body);
      await newRetailer.save();
      res.status(201).json(newRetailer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Only POST method is allowed" });
  }
};

export default conndb(handler);
