import mongoose from "mongoose";



const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    cartItems:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Products"
            },
            quantity:{
                type:Number,
                required:true
            },
            price:{
                type:Number
            }
        }
    ],
    totalPrice:{
        type:Number
    }
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
