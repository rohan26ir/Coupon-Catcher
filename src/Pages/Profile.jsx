import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>Profile - Coupon Catcher</title>
      </Helmet>
      <div className="bg-[#DAF7A6] h-36 p-14 ">
        <h2 className="text-2xl md:text-4xl w-[100%] font-bold">
          Welcome, <span className="text-orange-400">{user.displayName}</span>!
        </h2>
      </div>

      <div className="gap-5 w-[90%] mx-auto py-20 animate__animated animate__fadeInUp">
        <div className="bg-[#FF5733] w-[100%] rounded-2xl p-6">
          {/* Profile info with img */}
          <div className="animate__animated animate__zoomIn -mt-10 ml-2 mb-5">
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

          <div className="animate__animated animate__fadeIn">
            <h2 className="text-4xl font-bold">{user && user.displayName}</h2>
            <p className="text-lg">Email: {user && user.email}</p>
          </div>

          <div className="form-control mt-10 justify-center animate__animated animate__pulse">
            <Link to={"/update-profile"}>
              <button className="btn btn-primary">Update Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;