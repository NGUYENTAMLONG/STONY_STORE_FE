import instance from "./axios";

const fetchGetProducts = (page, limit, filter, sort) => {
  const params = {
    page,
    limit,
    filter,
    sort,
  };
  return instance.get(`/products`, { params });
};

export { fetchGetProducts };
