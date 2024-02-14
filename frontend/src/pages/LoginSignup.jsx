import React from "react";
import "./CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-conatiner">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Hava an Account ?<span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            I agree to the <span>Terms and Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
