import { FETCH_HYMNS, FETCH_HYMNS_ERROR } from "../actions/type";

const initialState = {
  hymns: [],
  hymn: null,
  Loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_HYMNS:
      return {
        ...state,
        hymns: payload,
        Loading: false,
      };
    // case FETCH_HYMNS_ERROR:
    //   return {
    //     ...state,
    //     error: payload,
    //     Loading: false,
    //     hymn: null,
    //   };

    default:
      return state;
  }
}
