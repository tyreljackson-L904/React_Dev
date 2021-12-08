import React from "react";
import "../styles/Search.css";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent) => void;
  onClick: (event: React.MouseEvent) => void;
}

const Search = ({ onChange, onClick, value }: SearchProps) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={onChange}
        value={value}
        size={80}
      />
      <button type="submit" className="search-btn" onClick={onClick}>
        Fetch User
      </button>
    </div>
  );
};

export default Search;
