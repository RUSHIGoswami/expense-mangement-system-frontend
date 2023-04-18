import React, { useState } from "react";
import Signupform from "../../Components/forms/Signupform";
import Loginform from "../../Components/forms/Loginform";

const Auth = () => {
  const [slide, setSlide] = useState(false);
  let slideProp;
  slide && (slideProp = { left: "50%" });

  let formSlideProp;
  slide && (formSlideProp = { left: "-900px" });

  let colorProp;
  slide && (colorProp = { color: "#fff", transition: "color 0.9s ease" });

  let invertColorProp;
  !slide &&
    (invertColorProp = { color: "#fff", transition: "color 0.9s ease" });
  return (
    <div className="auth">
      <div className="container">
        <div className="image-container">
          <h2>Welcome to Split wisely</h2>
        </div>
        <div className="auth-forms">
          <div className={"slider"} style={slideProp}></div>
          <div className="form-btns">
            <button onClick={() => setSlide(false)} style={invertColorProp}>
              Login
            </button>
            <button onClick={() => setSlide(true)} style={colorProp}>
              Sign up
            </button>
          </div>
          <div className="form-section" style={formSlideProp}>
            <Loginform />
            <Signupform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
