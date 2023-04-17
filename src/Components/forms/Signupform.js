import React from "react";
import { useForm } from "react-hook-form";

const Signupform = () => {
  // Initializing react-hook-form for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Validation patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;

  // Function for handling submission of Signup form
  const handleSignup = e => {
    console.log(e.name);
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
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
