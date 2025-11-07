import Products from "../models/productModel.js";

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
    res.status(200).json({ message: "Product added" });
  } catch (err) {
    res.status(404).json({ message: "No products found in this category" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    console.log(77);

    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log(category);

    const products = await Products.find({ productCategory: category });

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ message: error.message });
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

const filterByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const products = await Products.find({ productCategory: category });

    if (!products || products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ message: error.message });
  }
};

export {
  addProduct,
  getAllProducts,
  productDetails,
  getProductsByCategory,
  filterByCategory,
};
