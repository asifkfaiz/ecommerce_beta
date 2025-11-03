import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productService";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        console.log(res.data);
        
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Products</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
