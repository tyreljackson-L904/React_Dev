import React from "react";
import { useHistory } from "react-router-dom";
import "./PreviousPageBtn.css";

const PreviousPageBtn = ({ fetchPokemon }) => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="button">
      <button className="previous-btn" onClick={handleClick} path="/">
        {"<"} Prev
      </button>
    </div>
  );
};

export default PreviousPageBtn;
