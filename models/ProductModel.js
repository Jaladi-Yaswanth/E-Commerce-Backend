import mongoose from "mongoose";


const ProductScehma=mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    sizes:[{
        size:{type:String, required:true},
        stock:{type:String,require:true},}],
    images:[{type:String}],
    category:{type:String,required:true},
},{timestamps:true});

console.log(ProductScehma);
const ProductModel=mongoose.model('ProductModel',ProductScehma);

export default ProductModel;