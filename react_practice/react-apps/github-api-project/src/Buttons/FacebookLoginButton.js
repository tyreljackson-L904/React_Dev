import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #4267b2;
  width: 70%;
  font-weight: 500;
`;

export const FacebookLoginButton = ({ children, className }) => {
  return <Button className={className}>{children}</Button>;
};
