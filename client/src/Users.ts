import type { User } from './Users/UserType';

// eslint-disable-next-line import/prefer-default-export
export const users: User[] = [
  {
    id: 1,
    name: 'Sanya',
    secondName: 'Sane4ek',
    email: 'sanya@mail.ru',
    password: '123',
    isAdmin: true,
    avatar:
      'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
    description: 'ya sanya',
  },
  {
    id: 2,
    name: 'Vanya',
    secondName: 'Vane4ek',
    email: 'sanya@mail.ru',
    password: '123',
    isAdmin: false,
    avatar:
      'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
    description: 'ya sanya',
  },
];
