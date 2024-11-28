import React, { useContext } from "react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcAbout } from "react-icons/fc";
import { SiBrandfolder } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { RiCoupon2Fill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log("User navbar:", user);
  // console.log("User navbar 2:", user.email);

  // const { displayName, email, photoURL } = user;

  return (
    <div>
      <div className="navbar bg-[#B2D9EA] px-5">
        <div className="navbar-start">
          <div className="dropdown  z-40">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex items-center md:gap-3  z-50">
                <li>
                  <NavLink to={"/"}><FaHome></FaHome> Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}><FcAbout></FcAbout> About Dev</NavLink>
                </li>
                {user && (
                  <li className="bg-white py-3 mx-3 px-3 rounded-3xl">
                    <NavLink to={"/brands"}><SiBrandfolder></SiBrandfolder> Brands</NavLink>
                  </li>
                )}
                {user && (
                  <li className="bg-white py-3 mx-3 px-3 rounded-3xl">
                    <NavLink to={"/my-profile"}><CgProfile></CgProfile> My Profile</NavLink>
                  </li>
                )}
              </div>
            </ul>
          </div>
          <Link to="/" className="flex text-xl font-bold justify-center items-center">
           <span className="mr-1 text-rose-600 "><RiCoupon2Fill /></span> <span className="mr-1 text-orange-600">Coupon</span> Catcher
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex items-center gap-3">

                <li>
                  <NavLink to={"/"}> <FaHome></FaHome>Home</NavLink>
                </li>
              <li>
                <NavLink to={"/about"}><FcAbout></FcAbout> About Dev</NavLink>
              </li>
                <li>
                  <NavLink to={"/brands"}><SiBrandfolder></SiBrandfolder> Brands</NavLink>
                </li>
              {user && (
                <li>
                  <NavLink to={"/my-profile"}><CgProfile></CgProfile> My Profile</NavLink>
                </li>
              )}
            </div>
          </ul>
        </div>
        <div className="navbar-end items-center gap-2">
          <div className="font-bold hidden md:block">{user && user.email}</div>
          <div>
            {!user ? (
              <FaUserCircle className="text-3xl"></FaUserCircle>
            ) : (
              <img
                className="h-10 w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
          </div>

          <div>
            {/* { user && user.email? " hello" : <p>{user.displayName}</p> } */}
          </div>

          {user ? (
            <button onClick={logOut} className="px-5 py-1 bg-gray-500">
              Log Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="px-5 py-1 bg-gray-500">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
