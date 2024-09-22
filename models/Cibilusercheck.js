
const mongoose = require("mongoose");

const cibilusercheckSchema = new mongoose.Schema(
  {
    name: {
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
    pan: {
        type: String,
        required: true,
      },
    cibil:Object,
  },
  { timestamps: true }
);

export default mongoose.models.Cibilusercheck || mongoose.model("Cibilusercheck", cibilusercheckSchema);
