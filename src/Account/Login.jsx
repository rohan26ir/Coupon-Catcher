import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/FirebaseInit.config";

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
        const user = result.user;

        setUser(user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Welcome, ${user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1600);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        setUser(user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Welcome, ${user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1600);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;

    if (!email) {
      setErrorMessage("Please provide an email address.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Password reset email sent to ${email}.`,
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className="flex justify-center items-center mb-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none pt-4">
        <h2 className="text-center text-lg font-bold mx-auto py-6 border-b-[1px] border-gray-400 w-[80%]">
          Login to your account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
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
              className="px-2 py-0 cursor-pointer text-orange-500 bg-gray-700 absolute right-4 top-12 rounded-full"
            >
              {!showPassword ? "Show" : "Hide"}
            </div>
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <label className="label">
            <p
              onClick={handleForgetPass}
              className="label-text-alt link link-hover cursor-pointer"
            >
              Forgot password?
            </p>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
          <div className="form-control">
            <div
              onClick={handleSignInGoogle}
              className="btn btn-neutral rounded-none"
            >
              <FcGoogle /> Log in with Google
            </div>
          </div>
          <p className="text-sm text-center py-3">
            Don’t Have An Account?{" "}
            <Link to={"/register"}>
              <span className="text-red-600">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;