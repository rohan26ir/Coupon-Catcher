import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {

  const {user} = useContext(AuthContext)
  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
       <Outlet></Outlet>
    </div>
  );
};

export default Profile;