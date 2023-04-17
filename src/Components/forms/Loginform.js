import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

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

  //Function for handling login form submission
  const handleLogin = e => {
    toast.success(`Cheers!!!`);
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
        <h2>LOGIN FORM</h2>
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
        <button type="submit">Login</button>
      </form>
      <div className="hidden">
        {errors.email && toast.error("Buddy!! enter valid email address")}
        {errors.password && toast.error("Buddy!! password format is wrong")}
      </div>
      <ToastContainer
        theme="colored"
        autoClose={2000}
        pauseOnHover={false}
        closeButton={false}
      />
    </>
  );
};

export default Loginform;
