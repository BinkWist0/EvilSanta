import { combineReducers } from 'redux';
import { usersReducer } from '../Users/reducer/usersReducer';
import reducer from '../Auth/reducer/AuthReducer';

const rootReducer = combineReducers({
  usersState: usersReducer,
  usersInfo: reducer,
});

export default rootReducer;
