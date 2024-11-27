import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { useAuth } from "../Context/AuthContext";


const Login = () => {
  const navigate = useNavigate();
  const { Logedin,findUserData } = useAuth();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const findUser = findUserData(username ,password)

    if (findUser) {
      Logedin(findUser);
      toast.success("Login Successfull");
      navigate("/");
    } else {
      toast.error("Wrong username or password");
    }

    setUsername("");
    setPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  return (
    <section className="w-1/2 border border-[#3B5D50] rounded-xl p-5 m-auto flex flex-col gap-y-10 justify-center items-center h-auto bg-gray-200">
      <h4 className="text-black text-4xl italic font-semibold">Login</h4>
      <form onSubmit={submitHandler} className="w-full flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-between gap-7 items-center w-3/4">
          <label className="text-xl font-medium" htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            value={username}
            className="border-[#3B5D50] p-3 w-96 rounded-lg backdrop-blur-sm bg-white/30 border shadow-lg text-gray-700 focus:outline-none"
            type="text"
            name="username"
            placeholder="Enter Username"
          />
        </div>

        <div className="flex justify-between gap-7 items-center w-3/4">
          <label className="text-xl font-medium" htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            value={password}
            className="border-[#3B5D50] p-3 w-96 rounded-lg backdrop-blur-sm bg-white/30 border shadow-lg text-gray-700 focus:outline-none"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-between items-center w-3/5">
          <button className="w-32 text-white text-lg h-12 outline-none border-none bg-[#3B5D50] rounded-lg">
            Log in
          </button>
          <p>New? <Link to="/signup" className="text-lg text-blue-500 active:text-blue-300">click</Link> to create Account</p>
        </div>
      </form>
    </section>
  );
};

export default Login;
