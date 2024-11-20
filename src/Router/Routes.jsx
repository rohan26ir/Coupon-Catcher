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
import UpdateProfile from '../Pages/UpdateProfile';
import BrandDetails from '../Pages/Brands/BrandDetails';
import ErrorPage from '../Pages/ErrorPage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><HomeLayout /></PrivateRoute> // Protected
      },
      {
        path: '/about',
        element: <About /> // Unprotected
      },
      {
        path: '/my-profile',
        element: <PrivateRoute><ProfileLayout /></PrivateRoute> // Protected
      },
      {
        path: '/brands',
        element: <PrivateRoute><Brands /></PrivateRoute>,
      },
      {
        path: '/brand-details/:id', // New Route for BrandDetails
        element: <PrivateRoute><BrandDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`./coupon.json`) 
            .then((res) => res.json())
            .then((data) => data.find((brand) => brand._id === params.id)) 
      }
    ]
  },
  {
    path: '/profile',
    element: <PrivateRoute><Profile /></PrivateRoute>
  },
  {
    path: '/update-profile',
    element: <UpdateProfile />
  },
  {
    path: '',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login /> // Unprotected
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }
]);

export default Routes;