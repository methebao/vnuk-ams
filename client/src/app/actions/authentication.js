import axios from "axios";
import { ROUTES } from "app/constants";
import { SET_CURRENT_USER_SUCCESS } from "app/constants/actionTypes";
import setAuthToken from "app/setAuthToken";
import jwt_decode from "jwt-decode";
import { message } from "antd";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("/api/users/register", user)
    .then(res => {
      history.push(ROUTES.LOGIN);
      const registeredUser = res.data;
      message.success(
        `Successfully registered ${registeredUser.email} account`
      );
    })
    .catch(err => {
      message.error(err.response.data.message);
    });
};

export const loginUser = (user, history) => dispatch => {
  axios
    .post("/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push(ROUTES.HOMEPAGE);
      message.success(`Successfully logged in with ${user.email} account`);
    })
    .catch(err => {
      message.error(err.response.data.message);
    });
};
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER_SUCCESS,
    payload: decoded
  };
};
export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  if (history) {
    history.push("/login");
  }
  message.success(`Successfully logged out !`);
};
