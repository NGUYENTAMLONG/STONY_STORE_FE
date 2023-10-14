import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS,
  FETCH_SUB_CATEGORY,
  FETCH_SUB_CATEGORY_FAILURE,
  FETCH_SUB_CATEGORY_SUCCESS,
} from "../actions/categoryAction";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  categories: null,
  subCategories: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.data,
        isLoading: false,
        isError: false,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FETCH_SUB_CATEGORY:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategories: action.data,
        isLoading: false,
        isError: false,
      };
    case FETCH_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
