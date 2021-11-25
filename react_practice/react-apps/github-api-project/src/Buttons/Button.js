import React from "react";
import "./Button.css";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  width: 70%;
  font-weight: 500;
`;

export const LoginButton = ({ children, className }) => {
  return <Button className={className}>{children}</Button>;
};
