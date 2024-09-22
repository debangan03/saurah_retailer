import conndb from "../../../middlewire/mongoose";
import Cibilusercheck from "../../../models/Cibilusercheck";

const handler=async(req,res)=>{
    if(req.method=="POST"){
        try{
            const {name,email,phone,pan,details}=req.body;
            const u=new Cibilusercheck({name,email,phone,pan,cibil:details})
            const u1=u.save();
            res.status(200).json({success:true});
        }
        catch(err){
            res.status(500).json({success:false,message:err.message});
        }
    }
    else{
        res.status(400).json({success:false,message:"Bad request"});
    }
}
export default conndb(handler);