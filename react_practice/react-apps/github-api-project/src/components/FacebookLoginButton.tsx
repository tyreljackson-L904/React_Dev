import React, { ReactChildren } from "react";
import styled from "styled-components";
// import facebook from "../images/facebook.png";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #4267b2;
  width: 70%;
  font-weight: 600;
`;

type LoginProps = {
  children: ReactChildren;
  className: string;
};

export const FacebookLoginButton = ({ children, className }: LoginProps) => {
  return (
    <Button className={className}>
      <img src="" alt="facebook" className="facebook-img" />
      {children}
    </Button>
  );
};
