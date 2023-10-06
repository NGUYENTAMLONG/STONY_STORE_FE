import instance from "./axios";
const fetchAllProducts = () => {
  return instance.get("/products");
};

const fetchReviewProducts = (categoryId, page, limit) => {
  return instance.get(
    `/categories/${categoryId}/products?page=${page}&limit=${limit}`
  );
};

const login = (payload) => {
  console.log(payload);
  return instance.post("/auth/login", payload);
};

export { fetchAllProducts, fetchReviewProducts, login };
