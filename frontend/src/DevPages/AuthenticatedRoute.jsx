import React from "react";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check for token in localStorage
  return token ? children : <Navigate to="/login" />;
};

export default AuthenticatedRoute;
