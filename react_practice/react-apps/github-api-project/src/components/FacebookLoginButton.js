import React from "react";
import styled from "styled-components";
import facebook from "../images/facebook.png";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #4267b2;
  width: 70%;
  font-weight: 600;
`;

export const FacebookLoginButton = ({ children, className }) => {
  return (
    <Button className={className}>
      <img src={facebook} alt="facebook" classname="facebook-img" />
      {children}
    </Button>
  );
};
