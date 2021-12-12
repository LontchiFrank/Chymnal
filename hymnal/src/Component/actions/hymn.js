import { FETCH_HYMNS, FETCH_HYMNS_ERROR } from "./type";
import axios from "axios";
export const getHymns = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/CH/AdminAuth/getAll");
    dispatch({
      type: FETCH_HYMNS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_HYMNS_ERROR,
      // payload: { msg: err.response.status, status: err.response.status },
    });
  }
};
