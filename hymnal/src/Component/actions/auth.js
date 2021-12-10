import { FETCH_HYMNS, FETCH_HYMNS_ERROR } from "./type";
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

// export const login =
//   ({ name, password }) =>
//   async (dispatch) => {
//     //config
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = { name, password };
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/CH/AdminAuth/login",
//         body,
//         config
//       );
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: LOGIN_FAILED,
//       });
//     }
//   };
export const getCurrentHymns = () => async (dispatch) => {
  try {
    const res = await axios.get("/getAll");
    dispatch({
      type: FETCH_HYMNS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_HYMNS_ERROR,
      payload: { msg: err.response.message, status: err.response.status },
    });
  }
};
