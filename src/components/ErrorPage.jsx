import React from "react";
import logo1 from '../assets/images/logo1.png';

const ErrorPage = () => {
  return (
    <div className="grid place-content-center mt-40">
      <div className="text-center text-2xl font-extrabold text-[#003046]">
        <h1>Error 404</h1>
        <p>
          Oops! Page Not Found
        </p>
        <a href="/">
          <div className="flex self-center mt-5">
            <img src={logo1} className="w-96 h-auto" /> 
          </div>
        </a>
      </div>
      
    </div>
  );
};

export default ErrorPage;
