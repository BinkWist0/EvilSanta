
import React, { useState } from 'react';
import type { User } from '../Users/UserType';
import NotUnregistered from './NotUnregistered';
import type { RootState } from '../store/store';


function ProfilePage({ user }: { user: User }): JSX.Element {
  return (
    <div>
      <p>...</p>
      <div>
        <img alt="..." src={user.avatarId} />
      </div>
      <div>
        <h1>
          {user.name}
          {user.lastname}
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
