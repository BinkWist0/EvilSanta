import type { User } from '../UserType';

export type Action = { type: 'users/init'; payload: User[] };
