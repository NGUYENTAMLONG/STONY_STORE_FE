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
  return instance.post("/auth/login", payload);
};

const fetchProfile = (accessToken) => {
  return instance.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { fetchAllProducts, fetchReviewProducts, login, fetchProfile };
