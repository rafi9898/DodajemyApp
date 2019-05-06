import authReducer from "./authReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
