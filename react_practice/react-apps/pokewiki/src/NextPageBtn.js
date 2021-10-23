import React from "react";
import "./NextPageBtn.css";

const NextPageBtn = ({ fetchPokemon }) => {
  return (
    <div className="button">
      <button className="next-btn" onClick={fetchPokemon} path="/">
        Next {">"}
      </button>
    </div>
  );
};

export default NextPageBtn;
