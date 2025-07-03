const express=require('express');

const app=express();

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

        const token=JsonWebTokenError.sign({id:user._id},process.env.SECRET_JWT_KEY,{
            expiresin:'7d',
        })

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
                email:user.email,
                name:user.name,

            }

        });

    }catch(error){
        console.log("Login error" ,error.meassage);
        res.status(500).json({message:"Server error"});
    }

};
