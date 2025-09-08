import mongoose from "mongoose";

const orderItemSchema=mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    quantity:{type:Number,required:true},
    size:{type:String,required:true},
    priceAtPurchase:{type:Number,required:true}
});

const OrderSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    items:[orderItemSchema],
    totalAmount:{type:Number,required:true},
    paymentStatus:{type:String,enum:['pending','completed','failed'],default:'pending'},
    orderStatus:{type:String,enum:['processing','shipped','delieverd'],default:'processing'},
    shippingAddress:{type:String,required:true}
},{timestamps:true});

const Order=mongoose.model('Order',OrderSchema);

export default Order;
