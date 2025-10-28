const BASE_URL = "http://localhost:6969";

export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};