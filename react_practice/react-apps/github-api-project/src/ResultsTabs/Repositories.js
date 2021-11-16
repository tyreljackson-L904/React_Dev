import React from 'react'

const Repositories = ({title, onClick}) => {
    return (
        <div className='repo-container'>
            <div className="title" onClick={onClick}>{title}</div>
            <div className="main-content"><p>Repositories</p></div>
        </div>
    )
}

export default Repositories
