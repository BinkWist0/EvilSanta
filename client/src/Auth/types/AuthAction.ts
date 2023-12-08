import { User } from '../../Users/UserType';
import UserInfo from './userInfo';

type AuthAction =
  | {
      type: 'add/userinfo';
      payload: UserInfo;
    }
  | {
      type: 'user/register';
      payload: User;
    }
  | {
      type: 'user/login';
      payload: User;
    }
  | {
      type: 'user/check';
      payload: User;
    };
export default AuthAction;
