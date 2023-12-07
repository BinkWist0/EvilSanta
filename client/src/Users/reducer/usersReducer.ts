import type { Action } from './action';
import type { State } from './reducerType';

export const init = { users: [] };
export const usersReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'users/init':
      return {
        ...state,
        users: action.payload,
      };
    default: {
      return state;
    }
  }
};
