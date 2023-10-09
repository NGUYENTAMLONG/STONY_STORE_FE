import {
  FETCH_USER_ERROR,
  FETCH_USER_LOGIN,
  FETCH_USER_PROFILE,
  FETCH_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REFRESH,
  FETCH_USER_PROFILE_SUCCESS,
} from "../actions/userAction";
const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  account: {
    username: "",
    email: "",
    accessToken: "",
    auth: null,
  },
  profile: {},
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
      localStorage.removeItem("access_token");

      return {
        ...state,
        account: {
          ...INITIAL_STATE.account,
          username: "",
          accessToken: "",
          auth: false,
        },
      };
    case USER_REFRESH:
      return {
        ...state,
        account: {
          ...INITIAL_STATE.account,
          username: localStorage.getItem("username"),
          accessToken: localStorage.getItem("access_token"),
          auth: true,
        },
      };
    case FETCH_USER_PROFILE:
      console.log("FETCH_USER_PROFILE Check profile >>>", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_USER_PROFILE_SUCCESS:
      // console.log("FETCH_USER_PROFILE_SUCCESS Check profile >>>", action.data);
      return {
        ...state,
        profile: {
          userId: action.data.profile.id,
          firstName: action.data.profile.firstName,
          lastName: action.data.profile.lastName,
          gender: action.data.profile.gender,
          phoneNumber: action.data.profile.phoneNumber,
          address: action.data.profile.address,
          avatar: action.data.profile.avatar,
          biography: action.data.profile.biography,
          birthday: action.data.profile.birthday,
          createdAt: action.data.profile.createdAt,
          email: action.data.profile.email,
        },
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default userReducer;
