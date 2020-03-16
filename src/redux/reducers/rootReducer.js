import { combineReducers } from 'redux';
import authReducer from './authReducer';
import imageReducer from './imageReducer';

const state = {
  auth: authReducer,
  image: imageReducer
};

export default combineReducers(state);