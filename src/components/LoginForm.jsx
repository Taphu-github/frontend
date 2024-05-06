import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BiSolidUserCircle} from'react-icons/bi';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const predefinedPassword="12345678"
  const predefinedUsername="admin"

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password match the predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
        navigate("/admin");
    } else {
      // The login failed
      // TODO: Display an error message to the user
    }
  };

  return (
    <div className="my-4 flex justify-center self-center">
        <form onSubmit={handleSubmit} className="m-10 p-5 self-center md:w-1/3 w-auto border-2 rounded-lg shadow-md opacity-90 bg-[#003046]">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center pt-5">
              <BiSolidUserCircle className="w-12 h-12 text-white"/>
            </div>
            <div className="my-4 flex flex-col mx-8">
              <label htmlFor="username" className="block text-md font-medium text-white text-bold">Username</label>
              <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 px-3 py-2 rounded bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-slate-500 focus:ring-1 sm:text-sm"
              />
            </div>
            <div className="mb-4 flex flex-col mx-8">
              <label htmlFor="password" className="block text-md font-medium text-white text-bold">Password</label>
              <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 px-3 py-2 rounded bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-slate-500 focus:ring-1 sm:text-sm"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn font-bold ms-4 my-4 hover:text-white hover:bg-[#003046]">Login</button>
            </div>
          </div>
        </form>
    </div>
  
  );
};

export default LoginForm;
