import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../actions/productAction";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  products: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_PRODUCT_SUCCESS:
      console.log("check get products", action.data);
      return {
        ...state,
        products: action.data.products,
        isLoading: false,
        isError: false,
      };
    case FETCH_PRODUCT_FAILURE:
      console.log("Fetch products failure");
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default productReducer;
