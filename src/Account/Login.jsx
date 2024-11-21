import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn, signInWithGoogle, setUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        handleNavigation(
          result.user,
          `Welcome ${result.user.displayName || "User"}!`
        );
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        handleNavigation(
          result.user,
          `Welcome ${result.user.displayName || "User"}!`
        );
      })
      .catch((error) => {
        handleError(error);
      });
  };

  const handleNavigation = (user, message) => {
    setUser(user);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `${message}`,
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate(location?.state || "/");
    }, 1600);
  };

  const handleError = (error) => {
    const friendlyMessage = error.message.includes("user-not-found")
      ? "No account found with this email."
      : error.message.includes("wrong-password")
      ? "Incorrect password. Try again."
      : "An unexpected error occurred.";
    setErrorMessage(friendlyMessage);
  };

  const handleForgetPasswordClick = () => {
    const email = emailRef.current.value || "";
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="flex justify-center items-center my-16 animate__animated animate__fadeIn">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none pt-4 animate__animated animate__bounceIn">
        <h2 className="text-center text-lg font-bold mx-auto py-6 border-b-[1px] border-gray-400 w-[80%] animate__animated animate__fadeInDown">
          Login to your account
        </h2>
        
        <form
          onSubmit={handleLogIn}
          className="card-body animate__animated animate__fadeInUp"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="h-8 w-8 cursor-pointer text-orange-500 bg-gray-700 absolute right-4 top-12 rounded-full flex justify-center items-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <div className="text-xl">
                {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 animate__animated animate__shakeX">
              {errorMessage}
            </p>
          )}
          <label className="label">
            <p
              className="label-text-alt link link-hover cursor-pointer"
              onClick={handleForgetPasswordClick}
            >
              Forgot password?
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none animate__animated animate__pulse">
              Login
            </button>
          </div>
          <p className="text-sm text-center py-3 animate__animated animate__fadeIn">
            Don’t Have An Account?{" "}
            <Link to={"/register"}>
              <span className="text-red-600">Register</span>
            </Link>
          </p>
          <div className="form-control">
            <div
              onClick={handleSignInGoogle}
              className="btn btn-neutral rounded-none flex items-center gap-2 justify-center animate__animated animate__tada"
            >
              <FcGoogle /> Log in with Google
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
