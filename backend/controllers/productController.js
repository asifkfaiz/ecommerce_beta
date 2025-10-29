const Products = require("../models/productModel");

const addProduct = async (req, res) => {
  try {
    const {
      productName,
      productDesc,
      productPrice,
      productStock,
      productCategory,
    } = req.body;
    const productImage = req.file.path;
    const product = new Products({
      productName,
      productDesc,
      productPrice,
      productStock,
      productCategory,
      productImage,
    });
    await product.save();
    console.log("Product added:", product);
    res.status(201).send("Product added successfully");
  } catch (err) {
    console.error("Error during product adding:", err);
    res.status(500).send(err.message);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const productDetails = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetails = await Products.find({ __id: productId });
    res.status(200).json(productDetails);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { addProduct, getAllProducts, productDetails };
