import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from '../Pages/Profile';

const ProfileLayout = () => {
  return (
    <div className="bg-[#2C3E50]">
      <main>

       {/* Start */}

       <div>
        <Profile></Profile>
       </div>

       {/* end */}
      <div>
        <Outlet></Outlet>
      </div>
      </main>
    </div>
  );
};

export default ProfileLayout;