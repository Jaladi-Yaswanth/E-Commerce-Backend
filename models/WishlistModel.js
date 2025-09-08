import mongoose from "mongoose";


const wishListSchema= mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}]
},{timestamps:true});


const Wishlist= mongoose.model('Wishlist',wishListSchema);

console.log(Wishlist);
export default Wishlist;
