import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/productcard.css";

function ProductCard({ product }) {
    // console.log(product);
    
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`); 
  };

  return (
    <div className="product-card">
      <img
        src={`http://localhost:6969/${product.productImage}`}
        alt={product.productName}
        className="product-image"
      />

      <div className="product-info">
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-category">{product.productCategory}</p>
        <p className="product-desc">
          {product.productDesc?.length > 60
            ? product.productDesc.slice(0, 60) + "..."
            : product.productDesc}
        </p>

        <div className="product-footer">
          <span className="product-price">₹{product.productPrice}</span>
          <span
            className={`product-stock ${
              product.productStock > 0 ? "in-stock" : "out-of-stock"
            }`}
          >
            {product.productStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <button className="details-btn" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
