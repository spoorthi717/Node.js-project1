const db=require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkEmailExists = (req,res,next)=>{
    //email
    User.findOne({
    email:req.body.email
}).exec((err,user)=>{
    if(err){
        res.status(500).send({message:err});
        return;
    }
    if (!user){
        res.status(400).send({message:"Failed! This Email is not registered with ODC!"});
        return;
    }
    next();
});
}

const forgot_pwd={
    checkEmailExists
}
module.exports=forgot_pwd;