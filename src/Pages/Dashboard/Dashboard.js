import React from "react";
import Navbar from "../../Components/ui/Navbar";
import axios from "axios";
import Friends from "../../Components/ui/Friends";
const Dashboard = () => {
  const username = sessionStorage.getItem("Username");

  // const customConfig = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // axios
  //   .get("https://localhost:44329/api/account/my-profile", {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  const profle = async () => {
    const loggedUser = await axios
      .get("https://localhost:44329/api/account/my-profile", {
        headers: { "Content-Type": "application/json" },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // console.log(loggedUser);
    // console.log(loggedUser.data);
  };

  profle();
  return (
    <>
      <Navbar username={username} />
      <div className="dashboard">
        <Friends />
        <div className="activity">Activity</div>
        <div className="balance">Balance</div>
      </div>
    </>
  );
};

export default Dashboard;
