import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Profile from '../Account/Profile/Profile';

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Profile></Profile>
      </main>
    </div>
  );
};

export default AuthLayout;