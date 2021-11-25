import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #1da1f2;
  width: 70%;
  font-weight: 500;
`;

export const TwitterLoginButton = ({ children, className }) => {
  return <Button className={className}>{children}</Button>;
};
