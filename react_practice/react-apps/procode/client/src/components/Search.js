import React, {useState} from 'react'

const Search = ({query, onClick, onChange}) => {
    return (
        <div className="search-bar__main-container">
            <div className="search-bar__search-input__container">
                <input type="text" className="search-bar__search-input" value={query} onChange={onChange}/>
                <button className="search-bar__search-button" onClick={onClick}>Search</button>
            </div>
        </div>
    )
}

export default Search
