import conndb from "../../../middlewire/mongoose";
import Retailer from "../../../models/Retailer";

const handler =async(req,res)=>{
    try {
        const {retailerId} = req.body;
        const retailer = await Retailer.findById(retailerId).populate('loans').exec();
        return retailer;
    } catch (error) {
        console.error("Error fetching retailer with loans:", error);
        throw error;
    }

}
export default conndb(handler);