import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const navUrl = (
  <>
    <div className="flex items-center gap-3">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Details</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Your Coupon</NavLink>
      </li>
    </div>
  </>
);

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
              {navUrl}
              {user ? (
                <li>
                  <NavLink to={"/"}>Profile</NavLink>
                </li>
              ) : (
                "Sign Up"
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            Coupon Catcher
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navUrl}</ul>
        </div>
        <div className="navbar-end items-center gap-2">
          <div>
            <FaUserCircle className="text-3xl"></FaUserCircle>
          </div>

          {user ? (
            <button onClick={logOut} className="px-5 py-1 bg-gray-500">
              Log Out
            </button>
          ) : (
            <Link to={"login"}>
              <button className="px-5 py-1 bg-gray-500">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
