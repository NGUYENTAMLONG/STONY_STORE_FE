import { toast } from "react-toastify";
import {
  fetchGetAllCategories,
  fetchGetAllSubCategoriesOfCategory,
} from "../../services/category-service";

export const FETCH_CATEGORY = "FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILURE = "FETCH_CATEGORY_FAILURE";

export const FETCH_SUB_CATEGORY = "FETCH_SUB_CATEGORY";
export const FETCH_SUB_CATEGORY_SUCCESS = "FETCH_SUB_CATEGORY_SUCCESS";
export const FETCH_SUB_CATEGORY_FAILURE = "FETCH_SUB_CATEGORY_FAILURE";

const handleGetCategoriesRedux = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_CATEGORY });
    try {
      const result = await fetchGetAllCategories();
      //   console.log(result);
      if (result) {
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          data: result.data,
        });
      } else {
        //error
        console.log(result);
        if (result && result.status === 400) {
          toast.error("Đã có lỗi xảy ra!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        dispatch({
          type: FETCH_CATEGORY_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
const handleGetSubCategoriesRedux = (categoryId) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_SUB_CATEGORY });
    try {
      const result = await fetchGetAllSubCategoriesOfCategory(categoryId);
      if (result) {
        dispatch({
          type: FETCH_SUB_CATEGORY_SUCCESS,
          data: result.subCategory,
        });
      } else {
        //error
        console.log(result);
        if (result && result.status === 400) {
          toast.error("Đã có lỗi xảy ra!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        dispatch({
          type: FETCH_SUB_CATEGORY_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export { handleGetCategoriesRedux, handleGetSubCategoriesRedux };
