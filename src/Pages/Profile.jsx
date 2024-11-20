import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="bg-[#DAF7A6]  h-36"></div>
      <div className=" gap-5 w-[90%] mx-auto py-20">
        <div className="bg-[#FF5733] w-[100%]] rounded-2xl p-6">
          {/* Profile info with img */}

          <div className="-mt-10 ml-2 mb-5">
            {!user ? (
              <FaUserCircle className="text-3xl"></FaUserCircle>
            ) : (
              <img
                className="h-32 w-32 bg-black bg-opacity-35 shadow-2xl rounded-full border-2 p-2"
                src={user.photoURL}
                alt=""
              />
            )}
          </div>

          <div>
            <h2 className="text-4xl font-bold">{user && user.displayName}</h2>
            <p className="text-lg">Email: {user && user.email}</p>
          </div>

          <div className="form-control mt-10 justify-center">
            <Link to={'/update-profile'}><button className="btn btn-primary">Update Profile</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
