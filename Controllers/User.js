import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const generateToken=(userId,role)=>{
    return jwt.sign({id:userId,role:role},process.env.SECRET_JWT_KEY,{
        expiresIn:'7d'
    });
};
const login= async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password) {
            res.status(400).json({message:'Email and password required'});
        }

        const user= await Usermodel.findOne({email});
        if(!user){
            res.status(401).json({message:"User Doesn't exist"});
        }

        //Check Password
        const isMatch= await bycrpt.compare(password,user.password);

        if(!isMatch){
            res.status(401).json({message:"Invalid Credentials" });
        }

        const token=generateToken(n)

        res.cookie('token',token,{
            httpOnly:true,
            secure:p,
            sameSite:"Strict",
            maxAge: 7*24*60*60*1000,
        });

        res.status(200).json({
            message:"Login Succesfull",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,

            }

        });

    }catch(error){
        console.log("Login error" ,error.meassage);
        res.status(500).json({message:"Server error"});
    }

};

const registerUser= async(req,res)=>{
    try{
        const {name,email,password,role}= req.body;

        const existindUser=await UserActivation.findOne({email});
        if(existindUser) return res.status(400).json({message :"User already exists"});

        const salt= await bycrpt.genSalt(10);
        const hashedPassword= await bycrpt.hash(password,salt);

        const newUser= await UserActivation.create({
            name,
            email,
            password:hashedPassword,
            role:role || 'user',
        });

        const token= generateToken(newUser._id,newUser.role);

        res.cookie('token',token,{
            httpOnly:true,
            secure:p,
            sameSite:'Strict',
            maxAge:7*24*60*60*60*1000,
        });

        res.status(201).josn({
            meassage:"User registered Sucessfully",
            user:{
                id:new UserActivation._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role,
            },

        });

    }
    catch(err){
        console.log("Register error",err.meassage);
        res.status(500).json({meassage:"Server error"});
    }
};


const logout =(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({meassage:"Logged Out Sucessfully"});
}

export default {login,registerUser,logout};
