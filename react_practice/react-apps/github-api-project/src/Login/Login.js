import React from "react";
import "./Login.css";
import GithubLoginButton from "../Buttons/GithubLoginButton";
import { FacebookLoginButton } from "../Buttons/FacebookLoginButton";
import { TwitterLoginButton } from "../Buttons/TwitterLoginButton";

const Login = ({ onClick }) => {
  return (
    <div className="login-wrapper">
      <p className="header">Sign in with Github</p>
      {/* <input
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
      /> */}
      <GithubLoginButton classname="continue">
        Login with Github
      </GithubLoginButton>
      <p className="divider-text">Or sign up through social media</p>
      <div className="login-social-btn">
        <FacebookLoginButton>Sign in with Facebook</FacebookLoginButton>
      </div>
      <div className="login-social-btn">
        <TwitterLoginButton>Sign in with Twitter</TwitterLoginButton>
      </div>
    </div>
  );
};

export default Login;
