import React from "react";
import styled from "styled-components";
import twitter from "../twitter.png";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #1da1f2;
  width: 70%;
  font-weight: 600;
`;

export const TwitterLoginButton = ({ children, className }) => {
  return (
    <Button className={className}>
      <img src={twitter} alt="" className="twitter-img" />
      {children}
    </Button>
  );
};
