const jwt=require('jsonwebtokens');

const verifyuser=(req,res,next)=>{
    const headers=req.headers['authorization'];
    const token=headers.split(' ')[1];
   
    if(!token) {
        res.status.json({error:'No token please log in again'});
    }
    try{
        const decoded=jwt.verify(token,jwt_secret_key);
        req.user=decoded;
        next();

    }catch(err){
        res.status(401).josn({error:'Token expired log in again'});

    }

}
module.exports=verifyuser;