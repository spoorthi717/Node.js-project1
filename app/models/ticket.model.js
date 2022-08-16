const mongoose=require("mongoose");
const Ticket=mongoose.model(
    "Ticket",
    new mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        tkt_status:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"status"
        },
        tkt_details:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Details"
        }
    })
);
module.exports=Ticket;