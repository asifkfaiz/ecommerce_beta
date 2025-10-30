const mongoose = require("mongoose");
const { productDetails } = require("../controllers/productController");

const cartSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  productName: {
    type: String,
    required:true,
  },
  productPrice: {
    type: String,
    required:true,
    trim: true,
  },
  productCategory: {
    type: String,
  },
  productImage: {
    type: String,
    required: true,
  },
  productQuantity:{
    type:Number,
    required:true
  }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
