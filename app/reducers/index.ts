import { combineReducers } from 'redux';
import * as moviesReducer from './movies';

export default combineReducers({...moviesReducer});
