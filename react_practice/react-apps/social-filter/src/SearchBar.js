import React from 'react'

const SearchBar = ({onClick}) => {
    
    return (
        <div className='searchbar-container'>
            <input type="text" size={40} className="searchbar" />
            <button className="search-btn" onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchBar
