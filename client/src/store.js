import { createStore, combineReducers } from 'redux';
import { userLoginReducer } from './reducers/userReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

export const store = createStore(reducer);
