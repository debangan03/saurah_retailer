import jwt from 'jsonwebtoken';
import Retailer from '../../../models/Retailer';
import conndb from '../../../middlewire/mongoose';
import bcrypt from 'bcrypt';

const handler = async (req, res) => {
    const { email, otp, name, registrationNo, panNo, gstNo, mobileNo, password } = req.body;

    if (!email || !otp) {
        return res.status(400).json({ message: 'Email and OTP are required' });
    }

    try {
        const retailer = await Retailer.findOne({ email });
        console.log(retailer);

        if (!retailer || retailer.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        retailer.name = name;
        retailer.registrationNo = registrationNo;
        retailer.panNo = panNo;
        retailer.gstNo = gstNo;
        retailer.mobileNo = mobileNo;
        retailer.password = hashedPassword;  // Make sure to hash the password before saving
        retailer.isVerified = true;
        retailer.otp = null;
        await retailer.save();

        const token = jwt.sign({ id: retailer._id, email: retailer.email,name:retailer.name,phone:retailer.mobileNo }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'OTP verified successfully', token });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default conndb(handler);
