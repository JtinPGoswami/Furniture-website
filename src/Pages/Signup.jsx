import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStor";
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const users = Array.isArray(getLocalStorage("users")) ? getLocalStorage("users") : [];

    const existingUser = users.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      toast.warn("Username or email is already taken. Please choose a different one.");
      setUsername("");
      setPassword("");
      setEmail("");
      setConfirmPassword("");
      return;
    }

    const newUser = { username, password, email };

    users.push(newUser);

    setLocalStorage("users", users);
    setLocalStorage("tmp", username)
    toast.info("fill billing details");
    navigate("/details");

    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
    else if (name === "email") setEmail(value);
  };

  return (
    <section className="w-1/2 border border-[#3B5D50] rounded-xl p-5 m-auto flex flex-col justify-center items-center h-auto bg-gray-200 gap-y-10">
      <h4 className="text-black text-4xl italic font-semibold">Sign Up</h4>
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-between gap-7 items-center w-3/4">
          <label className="text-xl font-medium" htmlFor="username">Username:</label>
          <input
            onChange={handleChange}
            value={username}
            className="border-[#3B5D50] p-3 w-96 rounded-lg backdrop-blur-sm bg-white/30 border shadow-lg text-gray-700 focus:outline-none"
            type="text"
            name="username"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="flex justify-between gap-7 items-center w-3/4">
          <label className="text-xl font-medium" htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            value={email}
            className="border-[#3B5D50] p-3 w-96 rounded-lg backdrop-blur-sm bg-white/30 border shadow-lg text-gray-700 focus:outline-none"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
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
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="flex justify-between gap-7 items-center w-3/4">
          <label className="text-xl font-medium" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            onChange={handleChange}
            value={confirmPassword}
            className="border-[#3B5D50] p-3 w-96 rounded-lg backdrop-blur-sm bg-white/30 border shadow-lg text-gray-700 focus:outline-none"
            type="password"
            name="confirmPassword"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="flex justify-between items-center w-3/5">
          <button className="w-32 text-white text-lg h-12 bg-[#3B5D50] rounded-lg">Sign Up</button>
          <p>Already a user? <Link to="/login" className="text-lg text-blue-500 active:text-blue-300">Login</Link></p>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
