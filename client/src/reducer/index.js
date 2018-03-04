import { combineReducers } from "redux";
import posts from "./post_reducer";

const rootReducer = combineReducers({
    posts
  });
  
  export default rootReducer;