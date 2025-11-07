import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        // required:true,
    },
    productDesc:{
        type:String
    },
    productImage:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        // required:true,
        trim:true
    },
    productStock:{
        type:String,
        default:0
    },
    productCategory:{
        type:String
    } 
})

const Products=mongoose.model('Products',productSchema)
export default Products