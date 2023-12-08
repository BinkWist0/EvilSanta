import { User } from '../../Users/UserType';
import UserInfo from './userInfo';

type AuthState = {
  user: User | null;
  userInfo: UserInfo;
};

export default AuthState;
