const jwt  = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async(req,res,next) => {

    const token  = req.header('Authorization');
    console.log(token);

    if(!token) {
    return res.status(401).json({message:"Unauthorized HTTP , Token not provided"});
 }
  // token jab aata hai to bearer ke saath aata hai to remove karna hai beare
 const jwtToken = token.replace("Bearer","").trim();

 try{

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);


    //email ki madat se sab data le liya par password nhi chahiye
    const userData = await User.findOne({email:isVerified.email}).select({password:0});
    console.log(userData); 

    req.user = userData;
    req.token = token;
    req.userID = userData._id; 

    next();
 }catch(error) {
    return res.status(401).json({message:"Unauthorized. Invalid token"});
 }


};

module.exports = authMiddleware;