import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
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
    toast.success(`Cheers!!! ${e.name}`);
  };

  return (
    <>
      <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
        <h2>SIGN UP FORM</h2>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          {...register("name", {
            required: true,
            pattern: { value: nameRegex },
          })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          {...register("email", {
            required: true,
            pattern: { value: emailRegex },
          })}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          {...register("password", {
            required: true,
            pattern: { value: passwordRegex },
          })}
        />
        <button type="submit">Sign up</button>
      </form>
      <div className="hidden">
        {errors.name && toast.error("Name should contain only Alphabets :)")}

        {errors.email && toast.error("Come on its not valid email")}

        {errors.password &&
          toast.error(
            "Password must be of 8 to 16 chars with at least 1 cap, 1 small, 1 number and 1 special char"
          )}
      </div>
      <ToastContainer
        theme="colored"
        autoClose={2000}
        closeButton={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default Signupform;
