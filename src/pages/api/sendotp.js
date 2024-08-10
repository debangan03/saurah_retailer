import nodemailer from 'nodemailer';
import crypto from 'crypto';
import Retailer from '../../../models/Retailer';
import conndb from '../../../middlewire/mongoose';

const handler=async(req, res) => {

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const otp = crypto.randomInt(100000, 999999).toString();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        await Retailer.findOneAndUpdate(
            { email },
            { otp },
            { new: true, upsert: true }
        );

        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export default conndb(handler);
