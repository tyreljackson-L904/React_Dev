import React from "react";
import "./NextPageBtn.css";

const NextPageBtn = ({ onClick }) => {
  return (
    <div className="button">
      <button className="next-btn" onClick={onClick} path="/">
        Next {">"}
      </button>
    </div>
  );
};

export default NextPageBtn;
