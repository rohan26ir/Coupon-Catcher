import React from 'react';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
       <Outlet></Outlet>
    </div>
  );
};

export default Profile;