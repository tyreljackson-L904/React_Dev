import React from "react";
import "../styles/Login.css";
import Octacat from "../images/Octocat.png";
import GithubLoginButton from "./GithubLoginButton";

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
        <GithubLoginButton className="login-btn">
          Login with Github
        </GithubLoginButton>
      </div>
    </div>
  );
};

export default Login;
