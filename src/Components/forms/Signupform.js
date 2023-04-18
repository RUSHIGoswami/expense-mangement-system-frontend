import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
  const [exist, setExist] = useState("");
  const navigate = useNavigate();
  // Initializing react-hook-form for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Validation patterns
  const nameRegex = /^[a-zA-Z]{2,}\s?[a-zA-Z]*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;

  // API content type config
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Function for handling submission of Signup form
  const handleSignup = async e => {
    const userSignup = JSON.stringify({
      userName: e.name,
      emailAddress: e.email,
      password: e.password,
      appName: "string",
    });

    try {
      const signedUp = await axios.post(
        "https://localhost:44329/api/account/register",
        userSignup,
        customConfig
      );
      const userName = signedUp.data.userName;
      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("Username", userName);
      console.log(sessionStorage.getItem("isAuthenticated"));
      navigate("/auth");
    } catch (err) {
      setExist("User already exist!!!");
    }
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
        <span className="error">{exist}</span>
        <h2>SIGN UP FORM</h2>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            {...register("name", {
              required: true,
              pattern: { value: nameRegex },
            })}
          />
          <br />
          <span className="error">
            {errors.name && "Name should contain only Alphabets"}
          </span>
        </div>
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
            {errors.email && "Enter valid email address"}
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
          <span className="error">
            {errors.password &&
              "Password must be of 8 to 16 chars with at least 1 cap, 1 small, 1 number and 1 special char"}
          </span>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default Signupform;
