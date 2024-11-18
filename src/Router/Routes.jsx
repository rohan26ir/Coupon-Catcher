import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import Login from '../Account/Login';
import Register from '../Account/Register';
import AuthLayout from '../Layout/AuthLayout';
import Profile from '../Account/Profile/Profile';
import MainLayout from '../Layout/MainLayout';
import About from '../Pages/About';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
    ]
  },
  {
    path: 'my-profile',
    element: <Profile></Profile>
  },
  {
    path: '',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
])
 

export default Routes;