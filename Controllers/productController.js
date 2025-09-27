import ProductModel from "../models/ProductModel"


const getallProducts= async (req,res,next)=>{
    try{
        const page=Number(req.query.page)||1;
        const limit=20;
        const skip=(page-1)*limit;

        const filter={};
        if(req.query.category) filter.category=req.query.category;

        const products=await ProductModel.find(filter).skip(skip).limit(limit);
        const total=await ProductModel.countDocuments(filter);
        res.status(200).json({
            success:true,
            page,
            totalPages:Math.ceil(total/limit),
            products,
        });
    }catch{
        next(error);
    }

}


const addProduct=async (req,res,next)=>{
    try{
        const {name,brand,description,prices,sizes,images,category}=req.body;
    const newProduct=new ProductModel({name,brand,description,prices,sizes,images,category});
    const savedProduct= await newProduct.save();
    res.status(201).josn({
        success:true,
        message:"Product Added Sucessfully",
        product:savedProduct
    });
}catch{
    next(error);
}
}


const deleteProduct= async(req,res,next)=>{
    try{
        const product=await ProductModel.findById(req.params.id);
        if(!product) return res.status(404).josn({success:false,mesage:'Product Not found'});

        await product.remove();

        res.status(200).josn({success:true,meassage:"Product Deleted Succesfully"});

    }catch{
        next(error);
    }
};

<<<<<<< HEAD
=======

export default {getallProducts,addProduct,deleteProduct};
>>>>>>> 757eb01 (New folders added)
