const jwt=require('jsonwebtokens');

const verifyuser=(req,res,next)=>{
   // const headers=req.headers['authorization'];
    //const token=headers.split(' ')[1];
    const token=req.cookies.token;
   
    if(!token) {
        res.status(401).json({error:'No token please log in again'});
    }
    try{
        const decoded=jwt.verify(token,jwt_secret_key);
        req.user={id:decoded.id,role:decoded.role};
        next();

    }catch(err){
        console.log("JWT error");
        res.status(401).josn({error:'Token expired log in again'});
    }

}

export default verifyuser;