import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";

const PrivateRoute = () => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  return isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
