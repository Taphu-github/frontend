import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import Owner from './pages/Owner';
import System from './pages/System';
import Analysis from './pages/Analysis';
import LoginForm from './components/LoginForm';
import NavbarLayout from './components/NavbarLayout';
import {createBrowserRouter, } from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout><HomePage /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>
  
  },
  {
    path: "*",
    element: <ErrorPage/>,
  
  },
  {
    path: "/user",
    element: <NavbarLayout><Owner /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>
  },
  {
    path: "/system",
    element: <NavbarLayout><System /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>

  },
  {
    path: "/analysis",
    element: <NavbarLayout><Analysis /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>,
  
  },
  {
    path: "/login",
    element: <NavbarLayout><LoginForm /></NavbarLayout>,
    errorElement:<h1 className="flex">Opps</h1>,
  
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
