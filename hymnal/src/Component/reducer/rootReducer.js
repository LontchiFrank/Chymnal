import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import hymn from "./hymn";
export default combineReducers({ alert, auth, hymn });
