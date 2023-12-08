import React, { useState } from 'react';
import type { User } from '../Users/UserType';
import NotUnregistered from './NotUnregistered';
import type { RootState } from '../store/store';

function ProfilePage(): JSX.Element {
  const isLoggedIn = useState((store: RootState) => store.userReducer.user);

  return (
    <div>
      <p>Хуй с ним </p>
      <div>
        <img alt="..." src={user.avatar} />
      </div>
      <div>
        <h1>
          {user.name}
          {user.secondName}
        </h1>
      </div>
      <div>
        <h2>{user.email}</h2>
      </div>
      <div>
        <h3>{user.description}</h3>
      </div>
    </div>
  );
}

export default ProfilePage;
