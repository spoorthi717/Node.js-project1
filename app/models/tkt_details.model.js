const mongoose=require("mongoose");
const Details=mongoose.model(
    "Details",
    new mongoose.Schema({
        name:String
    })
);
module.exports=Details;