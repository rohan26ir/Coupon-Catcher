import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Login from '../Account/Login';
import Register from '../Account/Register';
import AuthLayout from '../Layout/AuthLayout';
import MainLayout from '../Layout/MainLayout';
import About from '../Pages/About';
import Brands from '../Pages/Brands/Brands';
import ProfileLayout from '../Layout/ProfileLayout';
import Profile from '../Pages/Profile';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/', 
        element: (
          <PrivateRoute><HomeLayout></HomeLayout></PrivateRoute>
        ) // Protected
      },
      {
        path: '/about',
        element: <About></About> // Unprotected
      },
      {
        path: '/my-profile',
        element: (
          <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute>
        ) // Protected
      },
      {
        path: '/brands',
        element: (
          <PrivateRoute><Brands></Brands></PrivateRoute>
        ) // Protected
      }
    ]
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute><Profile></Profile></PrivateRoute>
    ) // Protected
  },
  {
    path: '',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login> // Unprotected
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }
]);

export default Routes;