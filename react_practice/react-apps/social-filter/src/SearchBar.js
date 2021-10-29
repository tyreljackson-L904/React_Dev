import React from 'react'


const SearchBar = ({ onClick, onChange, value }) => {
    
    return (
        <div className='searchbar-container'>
            <input type="text" size={40} className="searchbar" value={value} onChange={onChange}/>
            <button className="search-btn" onClick={onClick}>Search</button>
        </div>
    )
}

export default SearchBar
