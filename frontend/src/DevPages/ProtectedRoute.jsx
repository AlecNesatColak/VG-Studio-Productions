import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('developerToken');
  return token ? children : <Navigate to="/developer-login" />;
};

export default ProtectedRoute;
