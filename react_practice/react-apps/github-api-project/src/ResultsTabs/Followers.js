import React from 'react'

const Followers = ({title, onClick}) => {
    return (
        <div className='followers-container'>
            <div className="title" onClick={onClick}>{title}</div>
            <div className="main-content"><p>Followers</p></div>
        </div>
    )
}

export default Followers
