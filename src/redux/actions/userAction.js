import { toast } from "react-toastify";
import { fetchProfile, login } from "../../services/user-service";

// export const USER_LOGIN = "USER_LOGIN";
// export const USER_LOGOUT = "USER_LOGOUT";

export const FETCH_USER_LOGIN = "FETCH_USER_LOGIN";

export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESSE";

export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REFRESH = "USER_REFRESH";
//Profile
export const FETCH_USER_PROFILE = "FETCH_USER_PROFILE";
export const FETCH_USER_PROFILE_SUCCESS = "FETCH_USER_PROFILE_SUCCESS";
const handleLoginRedux = (username, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_LOGIN });
    try {
      const response = await login({
        username,
        password,
      });

      if (response && response.accessToken) {
        localStorage.setItem("access_token", response.accessToken);
        localStorage.setItem("username", username);
        dispatch({
          type: FETCH_USER_SUCCESS,
          data: {
            username,
            accessToken: response.accessToken,
          },
        });
        // console.log(response);
      } else {
        //error
        // console.log(response);
        if (response && response.status === 400) {
          toast.error("Tài khoản hoặc mật khẩu không chính xác", {
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
          type: FETCH_USER_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const handleLogoutRedux = () => {
  return async (dispatch, getState) => {
    dispatch({ type: USER_LOGOUT });
  };
};

const handleRefreshRedux = () => {
  return async (dispatch, getState) => {
    dispatch({ type: USER_REFRESH });
  };
};

const handleProfileRedux = (accessToken) => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_USER_PROFILE });
    try {
      const response = await fetchProfile(accessToken);
      if (response) {
        // console.log(response);
        dispatch({
          type: FETCH_USER_PROFILE_SUCCESS,
          data: {
            ...response,
          },
        });
      } else {
        if (response && response.status === 400) {
          toast.error("Lỗi xác thực !", {
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
        // dispatch({
        //   type: FETCH_USER_PROFILE_ERROR,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export {
  handleLoginRedux,
  handleLogoutRedux,
  handleRefreshRedux,
  handleProfileRedux,
};
