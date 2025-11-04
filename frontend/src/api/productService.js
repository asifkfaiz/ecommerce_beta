import api from "./axios";

export const addProduct = (formData) =>
  api.post("/products/addProduct", formData);


export const getProducts = () => api.get("/products/getProducts");


export const getProductById = (id) => api.get(`/productDetail/${id}`);
