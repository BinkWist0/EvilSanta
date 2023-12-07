import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { useAppDispatch } from '../store/store';
import { users } from '../Users';
import UsersList from '../Users/components/UsersList';
import Layout from './Layout';
import MainPage from '../mainPage';
import ProfilePage from '../profile/ProfilePage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'users/init', payload: users });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/users" element={<UsersList />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
