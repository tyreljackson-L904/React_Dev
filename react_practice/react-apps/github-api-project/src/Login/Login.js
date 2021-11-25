import React from "react";
import "./Login.css";
import Button from "../Button";

const Login = ({ username, password }) => {
  return (
    <div className="login-wrapper">
      {/* <header className="title">Login</header> */}
      <p className="header">Sign in with Github</p>
      <input
        type="text"
        placeholder="Enter your Username"
        value={username}
        className="auth-username"
      />
      <input
        type="text"
        placeholder="Enter your Password"
        value={password}
        className="auth-password"
      />
      <Button children="Continue" classname="continue" />
      <p className="divider-text">Or sign up through social media</p>
      <div className="login-social-btn">
        <Button children="Sign in with Facebook" />
      </div>
      <div className="login-social-btn">
        <Button children="Sign in with Twitter" />
      </div>
    </div>
  );
};

export default Login;
