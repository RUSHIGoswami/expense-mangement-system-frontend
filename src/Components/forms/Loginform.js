import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  // Initializing react-hook-form for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Regex for validation before submitting form
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const navigator = useNavigate();
  //Function for handling login form submission
  const handleLogin = async e => {
    const userLogin = JSON.stringify({
      userNameOrEmailAddress: e.email,
      password: e.password,
    });

    try {
      const logging = await axios.post(
        "https://localhost:44329/api/account/login",
        userLogin,
        customConfig
      );
      console.log(logging);
      navigator("/", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
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
          <span className="error">{errors.password && "Invalid Password"}</span>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="hidden"></div>
    </>
  );
};

export default Loginform;
