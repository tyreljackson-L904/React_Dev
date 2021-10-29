import React from 'react'

const Header = ({children}) => {
    return (
        <div className='header-container'>
            <h1 className="title">{children}</h1>
        </div>
    )
}

export default Header
