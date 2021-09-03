import { AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILED } from "./type";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import axios from "axios";
// export const loadUser = () => async (dispatch) => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }

//   try {
//     const res = await axios.get("/api/CH/AdminAuth/login");
//     dispatch({
//       type: USER_LOADED,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

//Login User

export const login =
  ({ name, password }) =>
  async (dispatch) => {
    //config
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { name, password };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/CH/AdminAuth/login",
        body,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };
