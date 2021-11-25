import React from "react";
import "./Login.css";
import { LoginButton } from "../Buttons/Button";
import { FacebookLoginButton } from "../Buttons/FacebookLoginButton";
import { TwitterLoginButton } from "../Buttons/TwitterLoginButton";
import facebook from "../facebook.png";
import twitter from "../twitter.png";

const Login = ({ username, password }) => {
  return (
    <div className="login-wrapper">
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
      <LoginButton classname="continue">Continue</LoginButton>
      <p className="divider-text">Or sign up through social media</p>
      <div className="login-social-btn">
        <FacebookLoginButton>
          <img src={facebook} alt="facebook" classname="facebook-img" /> Sign in
          with Facebook
        </FacebookLoginButton>
      </div>
      <div className="login-social-btn">
        <TwitterLoginButton>
          <img src={twitter} alt="" className="twitter-img" /> Sign in with
          Twitter
        </TwitterLoginButton>
      </div>
    </div>
  );
};

export default Login;
