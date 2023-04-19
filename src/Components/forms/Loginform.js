import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LOGIN_SUCCESS } from "../../Redux/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Loginform = () => {
  // State for handling invalid username of password
  const [invalid, setInvalid] = useState("");
  // Initializing hook for dispatch action
  const dispatch = useDispatch();

  // Initializing hook for navigation
  const navigate = useNavigate();

  // Initializing react-hook-form for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Regex for validation before submitting form
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,16}$/;

  // API content type config
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Function for handling login form submission
  const handleLogin = async e => {
    const userNameOrEmail = e.email;
    const userLogin = JSON.stringify({
      userNameOrEmailAddress: e.email,
      password: e.password,
    });

    try {
      const logging = await axios.post(
        "https://localhost:44329/api/account/login",
        userLogin,
        customConfig,
        { withCredentials: true,
        exposedHeaders: true }
      );

      if (logging.data.result === 1) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { userNameOrEmail },
        });

        sessionStorage.setItem("isAuthenticated", true);
        sessionStorage.setItem("Username", userNameOrEmail);
        console.log(logging.headers["set-cookie"]);
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
        // navigate("/");
      } else {
        setInvalid(logging.data.description);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <span className="error">{invalid}</span>
        <h2>LOGIN FORM</h2>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            {...register("email", {
              required: true,
              pattern: { value: emailRegex },
            })}
          />
          <br />
          <span className="error">
            {errors.email && "Invalid email address"}
          </span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            {...register("password", {
              required: true,
              pattern: { value: passwordRegex },
            })}
          />
          <br />
          <span className="error">{errors.password && "Invalid Password"}</span>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="hidden"></div>
    </>
  );
};

export default Loginform;
