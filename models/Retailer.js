import mongoose from "mongoose";

const RetailerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    registrationNo: {
        type: String,
    },
    panNo: {
        type: String,
    },
    gstNo: {
        type: String,
    },
    mobileNo: {
        type: String,
    },
    otp: {
        type: String,
    },
    password: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    loans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'LoanApplication'
    }]
});

export default mongoose.models.Retailer || mongoose.model("Retailer", RetailerSchema);
