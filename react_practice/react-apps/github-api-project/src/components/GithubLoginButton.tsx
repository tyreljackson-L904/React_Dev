import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import signInWithGithub from "../configs/firebase-config";

const Button = styled.button`
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px 0;
  color: #333;
  font-weight: 600;
`;

type LoginProps = {
  children: string;
  className: string;
};

const GithubLoginButton = ({ children, className }: LoginProps) => {
  return (
    <Button className={className} onClick={signInWithGithub}>
      <AiFillGithub />
      {children}
    </Button>
  );
};

export default GithubLoginButton;
