import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../utils/LocalStor";


const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(() => {
    getLocalStorage("LogedinUser") ? true : false;
  });

  const Logedin = (findUser) => {
    setLocalStorage("LogedinUser", findUser); // Store user in localStorage
    setIsLogedIn(true);
  };
  
  const Logedout = () => {
    toast.info("Log out Successfull");
    setIsLogedIn(false);
    removeLocalStorage("LogedinUser");
  };
  

//playing with data in local storage  

const users=Array.isArray(getLocalStorage("users")) ? getLocalStorage("users") : [];
const Loggedin = getLocalStorage("LogedinUser") || {};

  const usersData = () => {
    return users;
  };

  const userIndex =(ToMatchUsername)=>{
    
    const idx=users.findIndex((user) => user.username === ToMatchUsername);
    return idx
  } 

  const findUserData=(ToMatchUsername,ToMatchPassword)=>{
    const findUser = users.find((user) => user.username === ToMatchUsername && user.password === ToMatchPassword);
    return findUser;
  }


  const LoggedinUserData =() =>{
    const data=users.find((user) => user.username === Loggedin.username);
    return data;
  }
  return (
    <AuthContext.Provider
      value={{ isLogedIn, Logedin, Logedout, setIsLogedIn ,usersData,userIndex,findUserData,LoggedinUserData}}
    >
      {children}
    </AuthContext.Provider>
  );
};
