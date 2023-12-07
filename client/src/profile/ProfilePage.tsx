import React from 'react';

import type { User } from '../Users/UserType';

function ProfilePage({ user }: { user: User }): JSX.Element {
  return (
    <div>
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
