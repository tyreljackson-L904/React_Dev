import React from "react";
import "../styles/Button.css"

const Button = ({ children, onClick }) => {
  return <div className="button-lg" onClick={onClick}>{children}</div>;
};

export default Button;
