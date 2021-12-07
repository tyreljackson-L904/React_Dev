import React from "react";
import "../styles/Login.css";
import Octacat from "../images/Octocat.png";
import GithubLoginButton from "../components/GithubLoginButton";
import { FacebookLoginButton } from "../components/FacebookLoginButton";
import { TwitterLoginButton } from "../components/TwitterLoginButton";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <img
          src={Octacat}
          alt="github cat"
          className="octacat"
          width="200px"
          height="175px"
        />
        <h3 className="title">Github API Interface</h3>
        <GithubLoginButton classname="login-btn">
          Login with Github
        </GithubLoginButton>
        {/* <p className="divider-text">Or sign up through social media</p>
      <div className="login-social-btn">
        <FacebookLoginButton>Sign in with Facebook</FacebookLoginButton>
      </div>
      <div className="login-social-btn">
        <TwitterLoginButton>Sign in with Twitter</TwitterLoginButton>
      </div> */}
      </div>
    </div>
  );
};

export default Login;
