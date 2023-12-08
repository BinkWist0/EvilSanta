import type AuthAction from '../types/AuthAction';
import type AuthState from '../types/AuthState';

export const initState = {
  user: null,
  userInfo: {},
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
        user: action.payload,
      };
    case 'user/check':
      return {
        ...state,
        user: action.payload,
      };
    case 'user/logout':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default reducer;
