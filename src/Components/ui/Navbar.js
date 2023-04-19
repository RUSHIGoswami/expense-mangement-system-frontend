import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ username }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    const loggingOut = await axios.get(
      "https://localhost:44329/api/account/logout"
    );
    if (loggingOut.status === 204) {
      sessionStorage.removeItem("isAuthenticated");
      sessionStorage.removeItem("Username");
      navigate("/auth");
    }
  };
  return (
    <nav>
      <h3>Welcome {username}</h3>
      <button className="hamburger" onClick={() => setToggle(!toggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={toggle ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <Link>Add friend</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
