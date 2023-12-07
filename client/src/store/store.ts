import { createStore } from 'redux';
import { useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const store = createStore(rootReducer, composeWithDevTools());

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
