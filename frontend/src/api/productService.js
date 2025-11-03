import api from "./axios";

export const addProduct = (formData) =>
  api.post("/addProduct", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });


export const getProducts = () => api.get("/products/getProducts");


export const getProductById = (id) => api.get(`/productDetail/${id}`);
