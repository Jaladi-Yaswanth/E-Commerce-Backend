import CartModel from "../models/CartModel";



const addToCart= async (req,res,next)=>{
    try{
        const userId=req.user.id;
        const {productId,quantity,size}=req.body;
        let cart=await CartModel.findOne({user:userId});

        if(!cart) cart= new Cart({user:userId,items:[]});;

        const itemIndex=cart.items.findIndex(
            item=>item.product.toString()===productId && item.size==size);

        if(itemIndex >-1){
            cart.items[itemIndex].quantity+=quantity;
        }
        else {
            cart.items.push({product:productId,quantity,size
            });
        }

        await cart.save();
        res.status(200).josn({success:true,cart});
    }catch{
        next(error);
    }

}