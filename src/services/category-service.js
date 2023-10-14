import instance from "./axios";

const fetchGetAllCategories = () => {
  return instance.get("/categories/all");
};

const fetchGetAllSubCategoriesOfCategory = (categoryId) => {
  return instance.get(`/categories/${categoryId}`);
};

export { fetchGetAllCategories, fetchGetAllSubCategoriesOfCategory };
