import jwt from 'jsonwebtokens';

const verifyadmin=(req,res,next)=>{
    if(req.user || req.user!=='Admin'){
        return res.status(403).json({mesage:"Access denied: Admins only"});
    }
    next();
}

export default verifyadmin;