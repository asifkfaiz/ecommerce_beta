import React from "react";
import { addProduct } from "../api/productService";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [product, setProduct] = useState({
    productName: "",
    productDesc: "",
    productPrice: "",
    productStock: "",
    productCategory: "",
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("productDesc", product.productDesc);
    formData.append("productPrice", product.productPrice);
    formData.append("productStock", product.productStock);
    formData.append("productCategory", product.productCategory);
    if (image) formData.append("image", image);
    try {
      const response = await addProduct(formData);
      setMessage(response?.data?.message);
      console.log(response.data.message);
      navigate("/home");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <>
      <h1>ADD PRODUCT</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Product Name: </label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">product Description: </label>
        <input
          type="text"
          name="productDesc"
          value={product.productDesc}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">Product Price: </label>
        <input
          type="number"
          name="productPrice"
          value={product.productPrice}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">Product Category: </label>
        <input
          type="text"
          name="productCategory"
          value={product.productCategory}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">Product Stock: </label>
        <input
          type="text"
          name="productStock"
          value={product.productStock}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="">Product Image: </label>
        <input
          type="file"
          name="productImage"
          onChange={handleFileChange}
          required
        />
        <br />

        <button type="submit">ADD PRODUCT</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default AddProduct;
