import React, { ReactChildren } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  color: #fff;
  background: #1da1f2;
  width: 70%;
  font-weight: 600;
`;

type LoginProps = {
  children: ReactChildren;
  className: string;
};

export const TwitterLoginButton = ({ children, className }: LoginProps) => {
  return (
    <Button className={className}>
      <img src="" alt="" className="twitter-img" />
      {children}
    </Button>
  );
};
