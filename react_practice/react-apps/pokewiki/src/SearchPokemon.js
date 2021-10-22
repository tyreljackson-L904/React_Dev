import React from "react";

const SearchPokemon = ({ filter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search pokemon"
        className="search-input"
        onChange={filter}
      />
    </div>
  );
};

export default SearchPokemon;
