const jwt= require('jsonwebtoken');
const User= require('../model/user_schema');


//login token authrization
exports.login_required= (req, res, next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1]
        console.log("token", token)
        const user= jwt.verify(token, "aijajkhan");
        req.user=user;
        // console.log(user)
    }else{
        res.status(403).send("authrization requied")
    }
    next();
}

exports.adminMiddelware= (req,res, next)=>{
    if(req.user.user_detail.roll!=="admin"){
        return res.status(400).send({message: "Access Denied"})
    }
    next();
}


exports.userMiddleware= (req,res, next)=>{
    // console.log("aijajkhan", req.user.roll)
    if(req.user.user_detail.roll!=="user"){
        return res.status(400).send({message: "Access Denied"})
    }
    next();
}