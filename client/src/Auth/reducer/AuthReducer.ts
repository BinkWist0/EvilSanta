import type AuthAction from '../types/AuthAction';
import type AuthState from '../types/AuthState';

export const initState = {
  user: null,
  userInfo: {},
  isTut: false,
};

function reducer(state: AuthState = initState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'add/userinfo':
      return {
        ...state,
        userInfo: { ...state.userInfo, ...action.payload },
      };
    case 'user/register':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/login':
      return {
        ...state,
        isTut: true,
        user: action.payload,
      };
    case 'user/check':
      return {
        ...state,
        isTut: true,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
