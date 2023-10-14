import { toast } from "react-toastify";
import { fetchGetProducts } from "../../services/product-service";

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

const handleGetProductsRedux = (page, limit, filter, sort) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_PRODUCT });
    try {
      const result = await fetchGetProducts(page, limit, filter, sort);
      console.log(result);
      if (result) {
        dispatch({
          type: FETCH_PRODUCT_SUCCESS,
          data: {
            products: result,
          },
        });
        // console.log(response);
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
          type: FETCH_PRODUCT_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export { handleGetProductsRedux };
