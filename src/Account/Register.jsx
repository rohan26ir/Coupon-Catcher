import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photoUrl');
    const email = form.get('email');
    const password = form.get('password');

    // Validate password
    const passwordValidation = validatePassword(password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      return;
    } else {
      setPasswordError('');
    }

    if (!name || !photo || !email || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        return updateUserProfile({ displayName: name, photoURL: photo });
      })
      .then(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `Welcome, ${name}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `Welcome, ${user.displayName || 'User'}!`,
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate(location?.state ? location.state : '/');
        }, 1600);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      });
  };

  // Password validation function
  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    return '';
  };

  return (
    <div className="flex justify-center items-center mb-16">
      <Helmet>
        <title>Register - Coupon Catcher</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none pt-4">
        <h2 className="text-center text-lg font-bold mx-auto py-6 border-b-[1px] border-gray-400 w-[80%]">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photoUrl" placeholder="Enter your photo URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
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
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-neutral rounded-none">
              Register
            </button>
          </div>
          <div>
          <p className="text-sm text-center py-3">
            Already have an account?{" "}
            <Link to={'/login'}>
            <span className="text-red-600">Login here</span>
            </Link>
          </p>
          </div>
          <div className="form-control">
            <div onClick={handleSignInGoogle} className="btn btn-neutral rounded-none">
              <FcGoogle /> Log in with Google
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;