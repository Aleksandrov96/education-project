import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import getLoginStatus from '../../../utils/getLoginStatus';

function ProtectedRoutes() {
  const isAuth = getLoginStatus();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
