import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLocalStorage } from '../utils/LocalStor';

const PrivateRouteLogOut = ({ element, ...rest }) => {
  const chk = getLocalStorage("LogedinUser");
  return chk.length <=0 ? element : <Navigate to="/" />
};

export default PrivateRouteLogOut;
