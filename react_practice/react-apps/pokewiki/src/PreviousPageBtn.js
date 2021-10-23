import React from "react";
import "./PreviousPageBtn.css";

const Button = ({ onClick, children }) => {
  return (
    <div className="button">
      <button className="previous-btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
