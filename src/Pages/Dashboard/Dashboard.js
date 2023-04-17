import React from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "../../Components/Routes/Privateroute";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const ProtectedDashboard = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <PrivateRoute
      path="/"
      component={Dashboard}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default ProtectedDashboard;
