import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const [showPassword, setShowPassword] =useState(false)
  const {logIn, setUser} = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate()


  const handleLOgIn= (e) =>{
    e.preventDefault(); 

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log("hello", {email, password});

    logIn(email, password)
    .then(result => {
      const user = result.user;

      // console.log("Login:::", user);

      setUser(user)
      // navigate(location?.state ? location.state : '/')
      
       Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Welcome, ${user.displayName || 'Rohan'}!`,
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        navigate(location?.state ? location.state : '/');
      }, 1600);
    })
    .catch(error => {
      alert(error.code)
    })
  }


  return (
    <div className='flex justify-center items-center  mb-16'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none  pt-4">
        <h2 className='text-center text-lg font-bold mx-auto py-6 border-b-[1px] border-gray-400 w-[80%]'>Login your account</h2>
      <form onSubmit={handleLOgIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          name='email'
          placeholder="email" 
          className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showPassword ? "text" : "password"} 
          name='password'
          placeholder="password" 
          className="input input-bordered" required />

          <div
                onClick={() => setShowPassword(!showPassword)}
                className="px-2 py-0 cursor-pointer text-orange-500 bg-gray-700 absolute right-4 top-12 rounded-full"
              >
                {!showPassword ? "Show" : "Hide"}
              </div>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>

        <p className='text-sm text-center py-3'>Dont’t Have An Account ? 
          <Link to={'/register'}><span className='text-red-600'>Register</span></Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;