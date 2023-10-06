import {
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/userAction";
const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  account: {
    username: "",
    email: "",
    accessToken: "",
    auth: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        account: {
          ...INITIAL_STATE.account,
          auth: false,
        },
        isLoading: false,
        isError: true,
      };
    case FETCH_USER_SUCCESS:
      console.log(">>>> check action hereeee:", action);
      return {
        ...state,
        account: {
          ...INITIAL_STATE.account,
          username: action.data.username,
          accessToken: action.data.accessToken,
          auth: true,
        },
        isLoading: false,
        isError: false,
      };
    case USER_LOGOUT:
      console.log(">>>> check action logout:", action);
      localStorage.removeItem("username");
      localStorage.removeItem("accessToken");

      return {
        ...state,
        account: {
          ...INITIAL_STATE.account,
          username: "",
          accessToken: "",
          auth: false,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
