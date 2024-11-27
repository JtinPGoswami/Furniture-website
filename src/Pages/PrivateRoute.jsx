import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getLocalStorage } from "../utils/LocalStor";

const PrivateRoute = ({ element, ...rest }) => {
  const chk = getLocalStorage("LogedinUser");

  return chk.length <= 0 ? <Navigate to="/login" /> : element;
};

export default PrivateRoute;
