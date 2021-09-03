import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/type";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  Loading: true,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case USER_LOADED:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //     Loading: false,
    //     user: payload,
    //   };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      console.log("here  " + payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        Loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAILED:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        Loading: false,
        user: null,
      };
    default:
      return state;
  }
}
