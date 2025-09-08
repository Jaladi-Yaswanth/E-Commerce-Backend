import mongoose from "mongoose";


const CartItemSchema= mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    quantity:{type:Number,required:true},
    size:{type:String}

});

const cartSchema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    items:[CartItemSchema]
},{timestamps:true});

const Cart=mongoose.model('Cart',cartSchema);
export default {Cart};