const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home Logic
const home = async(req,res)=>{

    try{
        res.status(200).send('Welcome to Mern Stack by Jinesh using Controller');

    }
    catch(error){

        console.log(error);
    }
};

//Registration Logic

const register = async(req,res)=>{

    try{
        console.log(req.body);
        const {username,email,phone,password}  = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:"email already exist"});
        }

        const userCreated  = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json({
            msg:"registration Successful" ,
            token : await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        });
    }
    catch(error){
        next(error);
    }
};


//User Login Logic

const login = async (req,res) => {
    try{
        const{email, password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const isPasswordValid = await userExist.comparePassword(password);

        if(isPasswordValid){
            res.status(200).json({
                msg:"Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"invalid email or password"});
        }


    }
    catch(error){
        // res.status(500).json("Internal server error");
        next(error);
    }
};


//to send user data - user logic
const user = async(req,res) =>{
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});

    }
    catch(error){
        console.log(`error from the user route ${error}`);
    }
}


module.exports = {home,register,login,user};



