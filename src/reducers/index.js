import { combineReducers } from 'redux';
import { userReducer } from './usersReducer';
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  userReducer,
  postsReducer
});