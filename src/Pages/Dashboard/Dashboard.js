import React from "react";
import Navbar from "../../Components/ui/Navbar";
import axios from "axios";
const Dashboard = () => {
  const username = sessionStorage.getItem("Username");

  const profle = async () => {
    const loggedUser = await axios.get(
      "https://localhost:44329/api/account/my-profile"
    );
    console.log(loggedUser);
  };

  profle();
  return (
    <div>
      <Navbar username={username} />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
