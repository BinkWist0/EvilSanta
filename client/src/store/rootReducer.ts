import { combineReducers } from 'redux';
import { usersReducer } from '../Users/reducer/usersReducer';

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;
